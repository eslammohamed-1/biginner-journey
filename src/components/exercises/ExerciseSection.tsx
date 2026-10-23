import { useEffect, useRef, useState } from 'preact/hooks';
import type { ChapterExercises, ItemState } from '../../lib/types';
import { chapterKey, percent, readProgress, resetChapter, updateItem } from '../../lib/progress';
import { ChoiceExercise } from './ChoiceExercise';
import { OrderExercise } from './OrderExercise';
import { TextExercise } from './TextExercise';

type Props = {
	data: ChapterExercises;
};

export default function ExerciseSection({ data }: Props) {
	const key = chapterKey(data.book, data.chapterFile);
	const [items, setItems] = useState<Record<string, ItemState>>({});
	const [ready, setReady] = useState(false);
	const [salt, setSalt] = useState(0);
	const [armed, setArmed] = useState(false);
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

	function reset() {
		if (!armed) {
			setArmed(true);
			return;
		}
		resetChapter(data.book, data.chapterFile);
		dirty.current = false;
		setItems({});
		setSalt((value) => value + 1);
		setArmed(false);
		setReady(true);
	}

	const solvedCount = data.exercises.filter((exercise) => items[exercise.id]?.solved).length;
	const revealedCount = data.exercises.filter(
		(exercise) => !items[exercise.id]?.solved && items[exercise.id]?.revealed,
	).length;
	const pct = ready ? percent(solvedCount, data.exercises.length) : 0;

	return (
		<section class="ex-section" dir="rtl" lang="ar" aria-label="اتدرّب">
			<header class="ex-head">
				<div>
					<h2>اتدرّب</h2>
					<p class="ex-lead">حلّ التمارين بعد الفصل. النتيجة بتتحفظ في المتصفح على الجهاز ده.</p>
				</div>
				<p class="ex-score" aria-live="polite">
					النتيجة: {ready ? solvedCount : '…'} من {data.exercises.length}
					{ready && revealedCount > 0 ? (
						<span class="ex-score-note"> · {revealedCount} اتكشفت إجابتهم</span>
					) : null}
				</p>
			</header>
			<div
				class="prog-track"
				role="progressbar"
				aria-valuemin={0}
				aria-valuemax={100}
				aria-valuenow={pct}
				aria-label="نتيجة الفصل"
			>
				<span style={{ width: `${pct}%` }} />
			</div>
			<div class="ex-list">
				{data.exercises.map((exercise, index) => {
					const number = index + 1;
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
				})}
			</div>
			<button class="ex-btn secondary ex-reset" type="button" onClick={reset}>
				{armed ? 'متأكد؟ اضغط تاني عشان تمسح تقدّم الفصل' : 'امسح تقدّمي في الفصل ده'}
			</button>
		</section>
	);
}
