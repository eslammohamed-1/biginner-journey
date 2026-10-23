import { useEffect, useState } from 'preact/hooks';
import type { CommandExercise, FillExercise, ItemState } from '../../lib/types';
import { diagnoseCommand, diagnoseFill, matchesCommand, matchesFill } from '../../lib/grade';
import { LevelBadge, TypeBadge } from './LevelBadge';
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

function draftKey(id: string): string {
	return `bj-draft-${id}`;
}

export function TextExercise({ exercise, number, state, onChange }: Props) {
	const isFill = exercise.type === 'fill';
	const holes = isFill ? holeCount(exercise) : 1;
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

	// Pull saved progress or session draft on hydration.
	const savedKey = (state?.texts ?? []).join('\u0000');
	useEffect(() => {
		if (dirty) return;
		const texts = state?.texts;
		if (texts && texts.length > 0) {
			setValues(Array.from({ length: holes }, (_, index) => texts[index] ?? ''));
			return;
		}
		try {
			const rawDraft = sessionStorage.getItem(draftKey(exercise.id));
			if (rawDraft) {
				const parsed = JSON.parse(rawDraft) as string[];
				if (Array.isArray(parsed)) {
					setValues(Array.from({ length: holes }, (_, index) => parsed[index] ?? ''));
				}
			}
		} catch {}
	}, [savedKey, exercise.id, holes]);

	function edit(next: string[]) {
		setValues(next);
		setDirty(true);
		try {
			sessionStorage.setItem(draftKey(exercise.id), JSON.stringify(next));
		} catch {}
	}

	function check() {
		const ok = isFill
			? matchesFill(values, exercise.blanks)
			: matchesCommand(values[0] ?? '', exercise.accepted, exercise.patterns ?? []);
		setDirty(false);
		if (ok) {
			try {
				sessionStorage.removeItem(draftKey(exercise.id));
			} catch {}
		}
		onChange({ solved: ok, checked: true, texts: values, attempts: ok ? attempts : attempts + 1 });
	}

	function reveal() {
		setDirty(false);
		try {
			sessionStorage.removeItem(draftKey(exercise.id));
		} catch {}
		onChange({ solved: false, checked: Boolean(state?.checked), texts: values, attempts, revealed: true });
	}

	const parts = isFill ? exercise.template.split('___') : [];
	const diagnostic =
		checked && !solved && !revealed
			? isFill
				? diagnoseFill(values, exercise.blanks)
				: diagnoseCommand(values[0] ?? '', exercise.accepted, exercise.patterns ?? [])
			: null;

	return (
		<article
			class={`ex-card${solved ? ' is-card-solved' : ''}${revealed && !solved ? ' is-card-revealed' : ''}`}
			id={exercise.id}
			data-exercise-type={exercise.type}
		>
			<header class="ex-card-head">
				<div class="ex-card-meta">
					<span class="ex-num">{number}</span>
					<LevelBadge level={exercise.level} />
					<TypeBadge type={exercise.type} />
				</div>
				{solved && <span class="ex-status-pill is-solved">✓ محلول</span>}
				{!solved && revealed && <span class="ex-status-pill is-revealed">اتكشفت الإجابة</span>}
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
										placeholder="..."
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
					<div class="ex-cmd-wrap" dir="ltr">
						<span class="ex-cmd-prompt" aria-hidden="true">
							❯
						</span>
						<input
							class="ex-input ex-cmd-input"
							dir="ltr"
							lang="en"
							placeholder="اكتب الأمر أو الكود هنا..."
							spellcheck={false}
							autoComplete="off"
							aria-label="اكتب الأمر"
							value={values[0] ?? ''}
							disabled={locked}
							onInput={(event) => edit([event.currentTarget.value])}
						/>
					</div>
				)}
				{!locked && (
					<div class="ex-actions">
						<button class="ex-btn" type="submit">
							تحقق
						</button>
						{exercise.hint ? (
							<button class="ex-btn secondary" type="button" onClick={() => setHintOpen((open) => !open)}>
								{hintOpen ? 'إخفاء التلميح' : '💡 تلميح'}
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
					<p class={solved ? 'ex-verdict is-correct' : 'ex-verdict is-wrong'}>
						{solved ? '✓ صح' : '✗ لسه مش مظبوط'}
					</p>
					{!solved ? (
						<p class="ex-why">
							{diagnostic ? (
								<RichText text={diagnostic} />
							) : isFill ? (
								'راجع الكتابة حرفاً بحرف. الحروف الكبيرة والصغيرة بتفرق، والمسافات الزيادة في الأول والآخر مش مشكلة.'
							) : (
								'راجع الأمر والـ Flags والمسافات. مش لازم تكتب `$` أو `%` في الأول.'
							)}
							{attempts >= 2 && exercise.hint && !hintOpen ? ' — اضغط على زر «تلميح» للمساعدة.' : ''}
						</p>
					) : null}
				</div>
			)}
			{revealed ? (
				<div class="ex-reveal" aria-live="polite">
					<p class="ex-locked">
						السؤال ده مش هيتحسب في النتيجة. تقدر تضغط «أعد محاولة الأسئلة غير المحلولة» في آخر الفصل للمحاولة من جديد.
					</p>
					<strong>الإجابة المقبولة: </strong>
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
