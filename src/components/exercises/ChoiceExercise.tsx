import type { ItemState, McqExercise, ScenarioExercise } from '../../lib/types';
import { seededShuffle } from '../../lib/grade';
import { LevelBadge } from './LevelBadge';
import { RichText } from './RichText';

type Props = {
	exercise: McqExercise | ScenarioExercise;
	number: number;
	salt: number;
	state: ItemState | undefined;
	onChange: (state: ItemState) => void;
};

/** Wrong picks allowed before the answer shows. Two options leave nothing to retry. */
function maxAttempts(optionCount: number): number {
	return optionCount > 2 ? 2 : 1;
}

export function ChoiceExercise({ exercise, number, salt, state, onChange }: Props) {
	const choice = state?.choice;
	const solved = Boolean(state?.solved);
	const attempts = state?.attempts ?? 0;
	const outOfTries = !solved && attempts >= maxAttempts(exercise.options.length);
	const revealed = Boolean(state?.revealed) || outOfTries;
	const locked = solved || revealed;
	const checked = Boolean(state?.checked) && choice !== undefined;
	const selected = checked ? exercise.options[choice!] : undefined;
	const correctOption = exercise.options[exercise.correct];
	const wrongNow = checked && choice !== exercise.correct;
	const triesLeft = maxAttempts(exercise.options.length) - attempts;

	// Display order is shuffled, but state keeps the original index.
	const order = seededShuffle(
		exercise.options.map((_, index) => index),
		`${exercise.id}:opts:${salt}`,
		false,
	);

	function pick(index: number) {
		if (locked) return;
		const ok = index === exercise.correct;
		onChange({
			solved: ok,
			checked: true,
			choice: index,
			attempts: ok ? attempts : attempts + 1,
		});
	}

	function reveal() {
		onChange({ ...(state ?? { solved: false }), solved: false, revealed: true });
	}

	return (
		<article class="ex-card" id={exercise.id} data-exercise-type={exercise.type}>
			<header class="ex-card-head">
				<span class="ex-num">{number}</span>
				<LevelBadge level={exercise.level} />
			</header>
			{exercise.type === 'scenario' && (
				<p class="ex-scenario">
					<RichText text={exercise.scenario} />
				</p>
			)}
			<h3 class="ex-prompt">
				<RichText text={exercise.question} />
			</h3>
			<div class="ex-options" role="radiogroup" aria-label={exercise.question}>
				{order.map((index) => {
					const option = exercise.options[index]!;
					const isSelected = checked && choice === index;
					const isCorrect = isSelected && index === exercise.correct;
					const isWrong = isSelected && index !== exercise.correct;
					const isAnswer = revealed && index === exercise.correct;
					return (
						<label
							key={`${exercise.id}-${index}`}
							class={`ex-opt${isCorrect ? ' is-correct' : ''}${isWrong ? ' is-wrong' : ''}${isAnswer ? ' is-answer' : ''}`}
						>
							<input
								type="radio"
								name={`${exercise.id}-${salt}`}
								checked={isSelected}
								disabled={locked}
								onChange={() => pick(index)}
							/>
							<span>
								<RichText text={option.text} />
								{isSelected && (
									<strong class="ex-verdict">{isCorrect ? 'صح' : 'غلط'}</strong>
								)}
							</span>
						</label>
					);
				})}
			</div>
			{!locked && (
				<div class="ex-actions">
					<button class="ex-btn secondary" type="button" onClick={reveal}>
						اعرض الإجابة
					</button>
				</div>
			)}
			{(selected || revealed) && (
				<div class="ex-feedback" aria-live="polite">
					{selected ? (
						<p class="ex-why">
							<RichText text={selected.why} />
						</p>
					) : null}
					{wrongNow && !revealed ? (
						<p class="ex-why ex-retry">
							جرّب تاني. {triesLeft === 1 ? 'فاضلك محاولة واحدة' : `فاضلك ${triesLeft} محاولات`} قبل ما الإجابة تظهر.
						</p>
					) : null}
					{revealed && correctOption ? (
						<>
							<p class="ex-why">
								<strong>الإجابة الصح: </strong>
								<RichText text={correctOption.text} />
								<span> — </span>
								<RichText text={correctOption.why} />
							</p>
							<p class="ex-locked">السؤال ده مش هيتحسب في النتيجة. امسح تقدّم الفصل لو عايز تحاول تاني.</p>
						</>
					) : null}
					{solved || revealed ? (
						<p class="ex-explain">
							<strong>الشرح: </strong>
							<RichText text={exercise.explanation} />
						</p>
					) : null}
				</div>
			)}
		</article>
	);
}
