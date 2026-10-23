import { useState } from 'preact/hooks';
import type { ItemState, OrderExercise as OrderExerciseData } from '../../lib/types';
import { orderItemStatus, sameOrder, seededShuffle } from '../../lib/grade';
import { LevelBadge, TypeBadge } from './LevelBadge';
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

	const statuses = checked || solved ? orderItemStatus(list, exercise.items) : [];
	const correctPositionsCount = statuses.filter(Boolean).length;

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
		<article
			class={`ex-card${solved ? ' is-card-solved' : ''}${revealed && !solved ? ' is-card-revealed' : ''}`}
			id={exercise.id}
			data-exercise-type="order"
		>
			<header class="ex-card-head">
				<div class="ex-card-meta">
					<span class="ex-num">{number}</span>
					<LevelBadge level={exercise.level} />
					<TypeBadge type="order" />
				</div>
				{solved && <span class="ex-status-pill is-solved">✓ محلول</span>}
				{!solved && revealed && <span class="ex-status-pill is-revealed">اتكشفت الإجابة</span>}
			</header>
			<h3 class="ex-prompt">
				<RichText text={exercise.prompt} />
			</h3>
			<p class="ex-order-help">اسحب العنصر بالماوس، أو استخدم أزرار «فوق» و«تحت» لإعادة الترتيب.</p>
			<ol class="ex-order" aria-label="رتّب العناصر">
				{list.map((item, index) => {
					const slotOk = (checked || solved) && !revealed && statuses[index];
					const slotWrong = checked && !solved && !revealed && !statuses[index];
					return (
						<li
							key={item}
							class={`ex-order-item${overIndex === index ? ' is-over' : ''}${slotOk ? ' is-slot-correct' : ''}${slotWrong ? ' is-slot-wrong' : ''}`}
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
							<span class="ex-step-num" aria-hidden="true">
								{index + 1}
							</span>
							<span class="ex-order-label" dir="auto">
								<RichText text={item} />
								{slotOk && !solved && <span class="ex-slot-badge is-ok">✓ مكانه صح</span>}
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
									↑ فوق
								</button>
								<button
									type="button"
									class="ex-move"
									aria-label={`نقل لتحت: ${item}`}
									disabled={locked || index === list.length - 1}
									onPointerDown={(event) => event.stopPropagation()}
									onClick={() => move(index, index + 1)}
								>
									↓ تحت
								</button>
							</span>
						</li>
					);
				})}
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
						{solved
							? '✓ ترتيب صح بالكامل!'
							: `لسه الترتيب مش مظبوط — رتّبت ${correctPositionsCount} من ${exercise.items.length} في مكانهم الصح.`}
					</p>
					{!solved && correctPositionsCount > 0 && (
						<p class="ex-why">العناصر المتلونة بالأخضر في مكانها الصح، حرّك الباقي وجرّب تاني.</p>
					)}
				</div>
			)}
			{revealed ? (
				<div class="ex-reveal" aria-live="polite">
					<p class="ex-locked">
						السؤال ده مش هيتحسب في النتيجة. تقدر تضغط «أعد محاولة الأسئلة غير المحلولة» في آخر الفصل للمحاولة من جديد.
					</p>
					<strong>الترتيب الصح: </strong>
					<ol class="ex-answer-list">
						{exercise.items.map((item) => (
							<li key={item} dir="auto">
								<RichText text={item} />
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
