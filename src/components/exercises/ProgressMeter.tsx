import { percent } from '../../lib/progress';

type Props = {
	done: number | null;
	total: number;
	chaptersDone: number;
	chaptersWith: number;
	compact?: boolean;
};

export function ProgressView({ done, total, chaptersDone, chaptersWith, compact = false }: Props) {
	const pending = done === null;
	const value = pending ? 0 : done;
	const pct = pending ? 0 : percent(value, total);
	return (
		<div class={compact ? 'prog prog-compact' : 'prog'}>
			<div class="prog-row">
				<span>{compact ? 'تقدّمك' : 'تقدّمك في الكتاب'}</span>
				<span>
					{pending ? '…' : value} من {total}
				</span>
			</div>
			<div
				class="prog-track"
				role="progressbar"
				aria-valuemin={0}
				aria-valuemax={100}
				aria-valuenow={pct}
				aria-label="تقدّم التمارين"
			>
				<span style={{ width: `${pct}%` }} />
			</div>
			{!compact && (
				<p class="prog-chapters">
					خلّصت {pending ? '…' : chaptersDone} من {chaptersWith} فصل
				</p>
			)}
		</div>
	);
}
