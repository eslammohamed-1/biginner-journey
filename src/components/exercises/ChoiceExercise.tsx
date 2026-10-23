import type { ItemState, McqExercise, ScenarioExercise } from '../../lib/types';
import { LevelBadge } from './LevelBadge';
import { RichText } from './RichText';

type Props = {
	exercise: McqExercise | ScenarioExercise;
	number: number;
	state: ItemState | undefined;
	onChange: (state: ItemState) => void;
};

export function ChoiceExercise({ exercise, number, state, onChange }: Props) {
	const choice = state?.choice;
	const solved = Boolean(state?.solved);
	const checked = Boolean(state?.checked) && choice !== undefined;
	const selected = checked ? exercise.options[choice!] : undefined;

	function pick(index: number) {
		if (solved) return;
		onChange({
			solved: index === exercise.correct,
			checked: true,
			choice: index,
		});
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
				{exercise.options.map((option, index) => {
					const isSelected = checked && choice === index;
					const isCorrect = isSelected && index === exercise.correct;
					const isWrong = isSelected && index !== exercise.correct;
					return (
						<label
							key={option.text}
							class={`ex-opt${isCorrect ? ' is-correct' : ''}${isWrong ? ' is-wrong' : ''}`}
						>
							<input
								type="radio"
								name={exercise.id}
								checked={isSelected}
								disabled={solved}
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
			{selected && (
				<div class="ex-feedback" aria-live="polite">
					<p class="ex-why">
						<RichText text={selected.why} />
					</p>
					<p class="ex-explain">
						<strong>الشرح: </strong>
						<RichText text={exercise.explanation} />
					</p>
				</div>
			)}
		</article>
	);
}
