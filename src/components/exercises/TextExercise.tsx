import { useState } from 'preact/hooks';
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
	const texts = state?.texts ?? [];
	const values = Array.from({ length: holes }, (_, index) => texts[index] ?? '');
	const solved = Boolean(state?.solved);
	const checked = Boolean(state?.checked);
	const [hintOpen, setHintOpen] = useState(false);
	const [revealed, setRevealed] = useState(false);

	function write(next: string[], markChecked: boolean, markSolved: boolean) {
		onChange({ solved: markSolved, checked: markChecked, texts: next });
	}

	function check() {
		const ok = isFill
			? matchesFill(values, exercise.blanks)
			: matchesCommand(values[0] ?? '', exercise.accepted, exercise.patterns ?? []);
		write(values, true, ok);
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
					if (!solved) check();
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
										disabled={solved}
										onInput={(event) => {
											const next = values.slice();
											next[index] = event.currentTarget.value;
											write(next, false, false);
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
						disabled={solved}
						onInput={(event) => write([event.currentTarget.value], false, false)}
					/>
				)}
				<div class="ex-actions">
					<button class="ex-btn" type="submit" disabled={solved}>
						تحقق
					</button>
					{exercise.hint ? (
						<button class="ex-btn secondary" type="button" onClick={() => setHintOpen((open) => !open)}>
							{hintOpen ? 'إخفاء التلميح' : 'تلميح'}
						</button>
					) : null}
					<button class="ex-btn secondary" type="button" onClick={() => setRevealed(true)}>
						اعرض الإجابة
					</button>
				</div>
			</form>
			{hintOpen && exercise.hint ? (
				<p class="ex-hint">
					<strong>تلميح: </strong>
					<RichText text={exercise.hint} />
				</p>
			) : null}
			{(checked || solved) && (
				<div class="ex-feedback" aria-live="polite">
					<p class={solved ? 'ex-verdict is-correct' : 'ex-verdict is-wrong'}>{solved ? 'صح' : 'غلط'}</p>
					{!solved ? <p class="ex-why">راجع المسافات وعلامات التنصيص، وجرّب تاني.</p> : null}
				</div>
			)}
			{revealed ? (
				<div class="ex-reveal">
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
			{(checked || solved || revealed) && (
				<p class="ex-explain">
					<strong>الشرح: </strong>
					<RichText text={exercise.explanation} />
				</p>
			)}
		</article>
	);
}
