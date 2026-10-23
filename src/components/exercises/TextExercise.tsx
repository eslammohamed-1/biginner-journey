import { useEffect, useState } from 'preact/hooks';
import type { CommandExercise, FillExercise, ItemState } from '../../lib/types';
import { matchesCommand, matchesFill } from '../../lib/grade';
import { LevelBadge } from './LevelBadge';
import { RichText } from './RichText';

type Props = {
	exercise: CommandExercise | FillExercise;
	number: number;
	state: ItemState | undefined;
	onChange: (state: ItemState) => void;
};

function holeCount(exercise: FillExercise): number {
	return Math.max(exercise.template.split('___').length - 1, exercise.blanks.length);
}

function revealFill(exercise: FillExercise): string {
	const answers = exercise.blanks.map((blank) => blank[0] ?? '');
	let cursor = 0;
	return exercise.template.replace(/___/g, () => answers[cursor++] ?? '');
}

export function TextExercise({ exercise, number, state, onChange }: Props) {
	const isFill = exercise.type === 'fill';
	const holes = isFill ? holeCount(exercise) : 1;
	// Typing stays local. Progress is written only on check or reveal,
	// not on every keystroke.
	const [values, setValues] = useState<string[]>(() => {
		const texts = state?.texts ?? [];
		return Array.from({ length: holes }, (_, index) => texts[index] ?? '');
	});
	const [dirty, setDirty] = useState(false);
	const solved = Boolean(state?.solved);
	const revealed = Boolean(state?.revealed);
	const locked = solved || revealed;
	const checked = Boolean(state?.checked) && !dirty;
	const attempts = state?.attempts ?? 0;
	const [hintOpen, setHintOpen] = useState(false);

	// Saved progress arrives after hydration. Pull it in unless the reader is mid-edit.
	const savedKey = (state?.texts ?? []).join('\u0000');
	useEffect(() => {
		if (dirty) return;
		const texts = state?.texts ?? [];
		setValues(Array.from({ length: holes }, (_, index) => texts[index] ?? ''));
	}, [savedKey]);

	function edit(next: string[]) {
		setValues(next);
		setDirty(true);
	}

	function check() {
		const ok = isFill
			? matchesFill(values, exercise.blanks)
			: matchesCommand(values[0] ?? '', exercise.accepted, exercise.patterns ?? []);
		setDirty(false);
		onChange({ solved: ok, checked: true, texts: values, attempts: ok ? attempts : attempts + 1 });
	}

	function reveal() {
		setDirty(false);
		onChange({ solved: false, checked: Boolean(state?.checked), texts: values, attempts, revealed: true });
	}

	const parts = isFill ? exercise.template.split('___') : [];

	return (
		<article class="ex-card" id={exercise.id} data-exercise-type={exercise.type}>
			<header class="ex-card-head">
				<span class="ex-num">{number}</span>
				<LevelBadge level={exercise.level} />
			</header>
			<h3 class="ex-prompt">
				<RichText text={exercise.prompt} />
			</h3>
			<form
				class="ex-form"
				onSubmit={(event) => {
					event.preventDefault();
					if (!locked) check();
				}}
			>
				{isFill ? (
					<div class="ex-template" dir="ltr">
						{parts.map((part, index) => (
							<span class="ex-template-piece" key={`${index}-${part}`}>
								{part ? <span class="ex-template-text">{part}</span> : null}
								{index < holes ? (
									<input
										class="ex-input ex-blank"
										dir="ltr"
										lang="en"
										spellcheck={false}
										autoComplete="off"
										aria-label={`الفراغ ${index + 1}`}
										value={values[index] ?? ''}
										disabled={locked}
										onInput={(event) => {
											const next = values.slice();
											next[index] = event.currentTarget.value;
											edit(next);
										}}
									/>
								) : null}
							</span>
						))}
					</div>
				) : (
					<input
						class="ex-input"
						dir="ltr"
						lang="en"
						spellcheck={false}
						autoComplete="off"
						aria-label="اكتب الأمر"
						value={values[0] ?? ''}
						disabled={locked}
						onInput={(event) => edit([event.currentTarget.value])}
					/>
				)}
				{!locked && (
					<div class="ex-actions">
						<button class="ex-btn" type="submit">
							تحقق
						</button>
						{exercise.hint ? (
							<button class="ex-btn secondary" type="button" onClick={() => setHintOpen((open) => !open)}>
								{hintOpen ? 'إخفاء التلميح' : 'تلميح'}
							</button>
						) : null}
						<button class="ex-btn secondary" type="button" onClick={reveal}>
							اعرض الإجابة
						</button>
					</div>
				)}
			</form>
			{hintOpen && exercise.hint ? (
				<p class="ex-hint">
					<strong>تلميح: </strong>
					<RichText text={exercise.hint} />
				</p>
			) : null}
			{(checked || solved) && !revealed && (
				<div class="ex-feedback" aria-live="polite">
					<p class={solved ? 'ex-verdict is-correct' : 'ex-verdict is-wrong'}>{solved ? 'صح' : 'غلط'}</p>
					{!solved ? (
						<p class="ex-why">
							{isFill
								? 'راجع الكتابة حرف حرف. الحروف الكبيرة والصغيرة بتفرق، والمسافات الزيادة في الأول والآخر مش مشكلة.'
								: 'راجع الأمر والـ Flags والمسافات. مش لازم تكتب `$` أو `%` في الأول.'}
							{attempts >= 2 && exercise.hint && !hintOpen ? ' جرّب التلميح.' : ''}
						</p>
					) : null}
				</div>
			)}
			{revealed ? (
				<div class="ex-reveal" aria-live="polite">
					<p class="ex-locked">السؤال ده مش هيتحسب في النتيجة. امسح تقدّم الفصل لو عايز تحاول تاني.</p>
					<strong>الإجابة: </strong>
					{isFill ? (
						<code dir="ltr">{revealFill(exercise)}</code>
					) : (
						<ul class="ex-answer-list">
							{exercise.accepted.map((answer) => (
								<li key={answer}>
									<code dir="ltr">{answer}</code>
								</li>
							))}
						</ul>
					)}
				</div>
			) : null}
			{(solved || revealed) && (
				<p class="ex-explain">
					<strong>الشرح: </strong>
					<RichText text={exercise.explanation} />
				</p>
			)}
		</article>
	);
}
