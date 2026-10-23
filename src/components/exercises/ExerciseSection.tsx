import { useEffect, useRef, useState } from 'preact/hooks';
import type { ChapterExercises, ItemState } from '../../lib/types';
import {
	chapterKey,
	percent,
	readProgress,
	resetChapter,
	resetUnsolvedInChapter,
	updateItem,
} from '../../lib/progress';
import { ChoiceExercise } from './ChoiceExercise';
import { OrderExercise } from './OrderExercise';
import { TextExercise } from './TextExercise';

type Props = {
	data: ChapterExercises;
};

type FilterMode = 'all' | 'unsolved' | 'review';

export default function ExerciseSection({ data }: Props) {
	const key = chapterKey(data.book, data.chapterFile);
	const [items, setItems] = useState<Record<string, ItemState>>({});
	const [ready, setReady] = useState(false);
	const [salt, setSalt] = useState(0);
	const [armed, setArmed] = useState(false);
	const [filter, setFilter] = useState<FilterMode>('all');
	const dirty = useRef(false);

	useEffect(() => {
		if (dirty.current) return;
		setItems(readProgress()[key]?.items ?? {});
		setReady(true);
	}, [key, salt]);

	function onChange(id: string, item: ItemState) {
		dirty.current = true;
		setArmed(false);
		updateItem(data.book, data.chapterFile, id, item);
		setItems((prev) => ({ ...prev, [id]: item }));
	}

	function resetAll() {
		if (!armed) {
			setArmed(true);
			return;
		}
		resetChapter(data.book, data.chapterFile);
		dirty.current = false;
		setItems({});
		setSalt((value) => value + 1);
		setArmed(false);
		setFilter('all');
		setReady(true);
	}

	function retryUnsolved() {
		resetUnsolvedInChapter(data.book, data.chapterFile);
		dirty.current = false;
		setItems(readProgress()[key]?.items ?? {});
		setSalt((value) => value + 1);
		setArmed(false);
		setReady(true);
	}

	const total = data.exercises.length;
	const solvedCount = data.exercises.filter((exercise) => items[exercise.id]?.solved).length;
	const revealedCount = data.exercises.filter(
		(exercise) => !items[exercise.id]?.solved && items[exercise.id]?.revealed,
	).length;
	const unsolvedCount = total - solvedCount;
	const reviewCount = data.exercises.filter((exercise) => {
		const st = items[exercise.id];
		return Boolean(st && (!st.solved && (st.revealed || (st.attempts ?? 0) > 0)));
	}).length;
	const pct = ready ? percent(solvedCount, total) : 0;

	const visibleExercises = data.exercises
		.map((exercise, index) => ({ exercise, number: index + 1 }))
		.filter(({ exercise }) => {
			if (filter === 'all') return true;
			const st = items[exercise.id];
			if (filter === 'unsolved') return !st?.solved;
			if (filter === 'review') return Boolean(st && !st.solved && (st.revealed || (st.attempts ?? 0) > 0));
			return true;
		});

	return (
		<section class="ex-section" dir="rtl" lang="ar" aria-label="اتدرّب">
			<header class="ex-head">
				<div>
					<div class="ex-title-row">
						<h2>اتدرّب على الفصل</h2>
						{ready && solvedCount === total && total > 0 && (
							<span class="ex-complete-badge">🎉 أتقنت الفصل بالكامل!</span>
						)}
					</div>
					<p class="ex-lead">طبّق اللي قريته عملياً. تقدّمك بيتحفظ تلقائياً في المتصفح على جهازك.</p>
				</div>
				<div class="ex-score-box" aria-live="polite">
					<p class="ex-score">
						النتيجة: <strong>{ready ? solvedCount : '…'}</strong> من <strong>{total}</strong> ({pct}%)
					</p>
					{ready && revealedCount > 0 ? (
						<p class="ex-score-note">{revealedCount} أسئلة اتكشفت إجابتها ومحتاجة إعادة</p>
					) : null}
				</div>
			</header>
			<div
				class="prog-track ex-prog-track"
				role="progressbar"
				aria-valuemin={0}
				aria-valuemax={100}
				aria-valuenow={pct}
				aria-label="نتيجة الفصل"
			>
				<span style={{ width: `${pct}%` }} />
			</div>

			{ready && (
				<div class="ex-filter-bar" role="toolbar" aria-label="فلترة التمارين">
					<button
						type="button"
						class={`ex-filter-pill${filter === 'all' ? ' is-active' : ''}`}
						onClick={() => setFilter('all')}
					>
						الكل ({total})
					</button>
					<button
						type="button"
						class={`ex-filter-pill${filter === 'unsolved' ? ' is-active' : ''}`}
						onClick={() => setFilter('unsolved')}
					>
						لسه متحلتش ({unsolvedCount})
					</button>
					{reviewCount > 0 && (
						<button
							type="button"
							class={`ex-filter-pill is-review-pill${filter === 'review' ? ' is-active' : ''}`}
							onClick={() => setFilter('review')}
						>
							للمراجعة والإعادة ({reviewCount})
						</button>
					)}
				</div>
			)}

			<div class="ex-list">
				{visibleExercises.length === 0 ? (
					<div class="ex-empty-filter">
						<p>مفيش تمارين في الفلتر ده حالياً.</p>
						<button type="button" class="ex-btn secondary" onClick={() => setFilter('all')}>
							اعرض كل التمارين
						</button>
					</div>
				) : (
					visibleExercises.map(({ exercise, number }) => {
						const state = items[exercise.id];
						const itemKey = `${exercise.id}-${salt}`;
						if (exercise.type === 'mcq' || exercise.type === 'scenario') {
							return (
								<ChoiceExercise
									key={itemKey}
									exercise={exercise}
									number={number}
									salt={salt}
									state={state}
									onChange={(next) => onChange(exercise.id, next)}
								/>
							);
						}
						if (exercise.type === 'command' || exercise.type === 'fill') {
							return (
								<TextExercise
									key={itemKey}
									exercise={exercise}
									number={number}
									state={state}
									onChange={(next) => onChange(exercise.id, next)}
								/>
							);
						}
						return (
							<OrderExercise
								key={itemKey}
								exercise={exercise}
								number={number}
								salt={salt}
								state={state}
								onChange={(next) => onChange(exercise.id, next)}
							/>
						);
					})
				)}
			</div>

			<footer class="ex-footer-actions">
				{ready && reviewCount > 0 && (
					<button class="ex-btn" type="button" onClick={retryUnsolved}>
						أعد محاولة الأسئلة غير المحلولة فقط ({reviewCount})
					</button>
				)}
				<button class="ex-btn secondary ex-reset" type="button" onClick={resetAll}>
					{armed ? 'متأكد؟ اضغط تاني عشان تمسح تقدّم الفصل كله' : 'امسح تقدّمي في الفصل ده'}
				</button>
			</footer>
		</section>
	);
}
