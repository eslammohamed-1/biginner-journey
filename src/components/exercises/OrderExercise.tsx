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
	const revealed = Boolean(state?.revealed);
	const locked = solved || revealed;
	const checked = Boolean(state?.checked);
	const attempts = state?.attempts ?? 0;
	const [dragIndex, setDragIndex] = useState<number | null>(null);
	const [overIndex, setOverIndex] = useState<number | null>(null);

	function move(from: number, to: number) {
		if (locked || from === to || to < 0 || to >= list.length) return;
		const next = list.slice();
		const [item] = next.splice(from, 1);
		if (item === undefined) return;
		next.splice(to, 0, item);
		onChange({ solved: false, checked: false, order: next, attempts });
	}

	function check() {
		const ok = sameOrder(list, exercise.items);
		onChange({ solved: ok, checked: true, order: list, attempts: ok ? attempts : attempts + 1 });
	}

	function reveal() {
		onChange({ solved: false, checked: false, order: list, attempts, revealed: true });
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
						draggable={!locked}
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
								disabled={locked || index === 0}
								onPointerDown={(event) => event.stopPropagation()}
								onClick={() => move(index, index - 1)}
							>
								فوق
							</button>
							<button
								type="button"
								class="ex-move"
								aria-label={`نقل لتحت: ${item}`}
								disabled={locked || index === list.length - 1}
								onPointerDown={(event) => event.stopPropagation()}
								onClick={() => move(index, index + 1)}
							>
								تحت
							</button>
						</span>
					</li>
				))}
			</ol>
			{!locked && (
				<div class="ex-actions">
					<button class="ex-btn" type="button" onClick={check}>
						تحقق من الترتيب
					</button>
					<button class="ex-btn secondary" type="button" onClick={reveal}>
						اعرض الإجابة
					</button>
				</div>
			)}
			{(checked || solved) && !revealed && (
				<div class="ex-feedback" aria-live="polite">
					<p class={solved ? 'ex-verdict is-correct' : 'ex-verdict is-wrong'}>
						{solved ? 'ترتيب صح' : 'لسه الترتيب مش مظبوط'}
					</p>
				</div>
			)}
			{revealed ? (
				<div class="ex-reveal" aria-live="polite">
					<p class="ex-locked">السؤال ده مش هيتحسب في النتيجة. امسح تقدّم الفصل لو عايز تحاول تاني.</p>
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
			{(solved || revealed) && (
				<p class="ex-explain">
					<strong>الشرح: </strong>
					<RichText text={exercise.explanation} />
				</p>
			)}
		</article>
	);
}
