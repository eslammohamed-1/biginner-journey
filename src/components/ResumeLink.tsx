import { useEffect, useState } from 'preact/hooks';
import { readLastVisited, type LastVisited } from '../lib/progress';

type Props = {
	base: string;
};

/** Primary call to action: the last chapter the reader opened, or book 01 for first-timers. */
export default function ResumeLink({ base }: Props) {
	const [last, setLast] = useState<LastVisited | null>(null);

	useEffect(() => {
		const saved = readLastVisited();
		// Ignore entries from a different base path (e.g. after a repo rename).
		if (saved && saved.href.startsWith(base)) setLast(saved);
	}, [base]);

	if (!last) {
		return (
			<a class="start-link" href={`${base}01-terminal/`}>
				ابدأ بالكتاب الأول
			</a>
		);
	}

	return (
		<span class="resume">
			<a class="start-link" href={last.href}>
				كمّل من مكان ما وقفت
			</a>
			<span class="resume-where">
				{last.bookTitle ? `${last.bookTitle} · ` : ''}
				{last.title}
			</span>
		</span>
	);
}
