import { useState } from 'preact/hooks';
import type { ItemState, OrderExercise as OrderExerciseData } from '../../lib/types';
import { sameOrder, seededShuffle } from '../../lib/grade';
import { LevelBadge } from './LevelBadge';
import { RichText } from './RichText';

type Props = {
	exercise: OrderExerciseData;
	number: number;
	salt: number;
	state: ItemState | undefined;
	onChange: (state: ItemState) => void;
};

export function OrderExercise({ exercise, number, salt, state, onChange }: Props) {
	const shuffled = seededShuffle(exercise.items, `${exercise.id}:${salt}`);
	const list = state?.order ?? shuffled;
	const solved = Boolean(state?.solved);
	const checked = Boolean(state?.checked);
	const [dragIndex, setDragIndex] = useState<number | null>(null);
	const [overIndex, setOverIndex] = useState<number | null>(null);
	const [revealed, setRevealed] = useState(false);

	function commit(next: string[], markChecked: boolean, markSolved: boolean) {
		onChange({ solved: markSolved, checked: markChecked, order: next });
	}

	function move(from: number, to: number) {
		if (solved || from === to || to < 0 || to >= list.length) return;
		const next = list.slice();
		const [item] = next.splice(from, 1);
		if (item === undefined) return;
		next.splice(to, 0, item);
		commit(next, false, false);
	}

	function check() {
		commit(list, true, sameOrder(list, exercise.items));
	}

	return (
		<article class="ex-card" id={exercise.id} data-exercise-type="order">
			<header class="ex-card-head">
				<span class="ex-num">{number}</span>
				<LevelBadge level={exercise.level} />
			</header>
			<h3 class="ex-prompt">
				<RichText text={exercise.prompt} />
			</h3>
			<p class="ex-order-help">اسحب العنصر، أو استخدم فوق وتحت. الأسهم أوضح على الموبايل.</p>
			<ol class="ex-order" aria-label="رتّب العناصر">
				{list.map((item, index) => (
					<li
						key={item}
						class={`ex-order-item${overIndex === index ? ' is-over' : ''}`}
						draggable={!solved}
						onDragStart={(event) => {
							setDragIndex(index);
							event.dataTransfer?.setData('text/plain', String(index));
							if (event.dataTransfer) event.dataTransfer.effectAllowed = 'move';
						}}
						onDragOver={(event) => {
							event.preventDefault();
							setOverIndex(index);
						}}
						onDrop={(event) => {
							event.preventDefault();
							const from = dragIndex ?? Number(event.dataTransfer?.getData('text/plain'));
							if (!Number.isNaN(from)) move(from, index);
							setDragIndex(null);
							setOverIndex(null);
						}}
						onDragEnd={() => {
							setDragIndex(null);
							setOverIndex(null);
						}}
					>
						<span class="ex-grip" aria-hidden="true">
							⋮⋮
						</span>
						<span class="ex-order-label" dir="auto">
							{item}
						</span>
						<span class="ex-moves">
							<button
								type="button"
								class="ex-move"
								aria-label={`نقل لأعلى: ${item}`}
								disabled={solved || index === 0}
								onPointerDown={(event) => event.stopPropagation()}
								onClick={() => move(index, index - 1)}
							>
								فوق
							</button>
							<button
								type="button"
								class="ex-move"
								aria-label={`نقل لتحت: ${item}`}
								disabled={solved || index === list.length - 1}
								onPointerDown={(event) => event.stopPropagation()}
								onClick={() => move(index, index + 1)}
							>
								تحت
							</button>
						</span>
					</li>
				))}
			</ol>
			<div class="ex-actions">
				<button class="ex-btn" type="button" onClick={check} disabled={solved}>
					تحقق من الترتيب
				</button>
				<button class="ex-btn secondary" type="button" onClick={() => setRevealed(true)}>
					اعرض الإجابة
				</button>
			</div>
			{(checked || solved) && (
				<div class="ex-feedback" aria-live="polite">
					<p class={solved ? 'ex-verdict is-correct' : 'ex-verdict is-wrong'}>
						{solved ? 'ترتيب صح' : 'لسه الترتيب مش مظبوط'}
					</p>
				</div>
			)}
			{revealed ? (
				<div class="ex-reveal">
					<strong>الترتيب الصح: </strong>
					<ol class="ex-answer-list">
						{exercise.items.map((item) => (
							<li key={item} dir="auto">
								{item}
							</li>
						))}
					</ol>
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
