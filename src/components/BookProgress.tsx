import { useEffect, useState } from 'preact/hooks';
import type { ChapterRef } from '../lib/types';
import { PROGRESS_EVENT, bookStats, perChapterStats } from '../lib/progress';
import { ProgressView } from './exercises/ProgressMeter';

type Props = {
	slug?: string;
	title: string;
	chapters: ChapterRef[];
};

export default function BookProgress({ slug, title, chapters }: Props) {
	const total = chapters.reduce((sum, chapter) => sum + chapter.ids.length, 0);
	const [done, setDone] = useState<number | null>(null);
	const [chaptersDone, setChaptersDone] = useState(0);
	const [weakCount, setWeakCount] = useState(0);

	useEffect(() => {
		const update = () => {
			const stats = bookStats(chapters);
			setDone(stats.done);
			setChaptersDone(stats.chaptersDone);
			setWeakCount(stats.weakCount);

			if (!slug) return;
			const detailMap = perChapterStats(slug, chapters);
			const links = document.querySelectorAll<HTMLAnchorElement>('.sl-markdown-content a[href]');
			links.forEach((link) => {
				const href = link.getAttribute('href') ?? '';
				const match = href.match(/(?:^\.\/|\/)(ch\d+)\/?$/);
				if (!match) return;
				const chFile = match[1]!;
				const detail = detailMap[chFile];
				if (!detail || detail.total === 0) return;

				let badge = link.parentElement?.querySelector<HTMLElement>('.ch-inline-status');
				if (!badge) {
					badge = document.createElement('span');
					badge.className = 'ch-inline-status';
					link.insertAdjacentElement('afterend', badge);
				}
				if (detail.complete) {
					badge.className = 'ch-inline-status is-complete';
					badge.textContent = `✓ مكتمل (${detail.done}/${detail.total})`;
				} else if (detail.done > 0 || detail.revealed > 0) {
					badge.className = 'ch-inline-status is-partial';
					badge.textContent = `${detail.done}/${detail.total} تمرين`;
				} else {
					badge.textContent = '';
					badge.className = 'ch-inline-status';
				}
			});
		};
		update();
		window.addEventListener(PROGRESS_EVENT, update);
		window.addEventListener('storage', update);
		return () => {
			window.removeEventListener(PROGRESS_EVENT, update);
			window.removeEventListener('storage', update);
		};
	}, [slug, chapters]);

	if (total === 0) {
		return (
			<section class="book-progress book-progress-soon" aria-label={`تقدّم ${title}`}>
				<p class="prog-soon">التمارين جاية قريب</p>
			</section>
		);
	}

	return (
		<section class="book-progress" aria-label={`تقدّم ${title}`}>
			<ProgressView
				done={done}
				total={total}
				chaptersDone={chaptersDone}
				chaptersWith={chapters.filter((chapter) => chapter.ids.length > 0).length}
				weakCount={weakCount}
				compact={false}
			/>
		</section>
	);
}
