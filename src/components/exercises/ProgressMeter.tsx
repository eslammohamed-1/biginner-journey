import { percent } from '../../lib/progress';

type Props = {
	done: number | null;
	total: number;
	chaptersDone: number;
	chaptersWith: number;
	weakCount?: number;
	compact?: boolean;
};

export function ProgressView({
	done,
	total,
	chaptersDone,
	chaptersWith,
	weakCount = 0,
	compact = false,
}: Props) {
	const pending = done === null;
	const value = pending ? 0 : done;
	const pct = pending ? 0 : percent(value, total);
	const isComplete = !pending && total > 0 && value === total;

	return (
		<div class={`${compact ? 'prog prog-compact' : 'prog'}${isComplete ? ' is-prog-complete' : ''}`}>
			<div class="prog-row">
				<span class="prog-label">
					{compact ? 'تقدّمك' : 'تقدّمك في الكتاب'}
					{isComplete && <span class="prog-done-badge">✓ مكتمل</span>}
				</span>
				<span class="prog-numbers">
					{pending ? '…' : value} من {total}{' '}
					<strong class="prog-pct">({pending ? '0' : pct}%)</strong>
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
			<div class="prog-meta-row">
				<p class="prog-chapters">
					{compact
						? `${pending ? '…' : chaptersDone} / ${chaptersWith} فصل مكتمل`
						: `خلّصت ${pending ? '…' : chaptersDone} من ${chaptersWith} فصل بالكامل`}
				</p>
				{!pending && weakCount > 0 && (
					<span class="prog-weak-note">{weakCount} للمراجعة</span>
				)}
			</div>
		</div>
	);
}
