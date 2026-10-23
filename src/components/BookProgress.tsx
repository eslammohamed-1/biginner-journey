import { useEffect, useState } from 'preact/hooks';
import type { ChapterRef } from '../lib/types';
import { PROGRESS_EVENT, bookStats } from '../lib/progress';
import { ProgressView } from './exercises/ProgressMeter';

type Props = {
	title: string;
	chapters: ChapterRef[];
};

export default function BookProgress({ title, chapters }: Props) {
	const total = chapters.reduce((sum, chapter) => sum + chapter.ids.length, 0);
	const [done, setDone] = useState<number | null>(null);
	const [chaptersDone, setChaptersDone] = useState(0);

	useEffect(() => {
		const update = () => {
			const stats = bookStats(chapters);
			setDone(stats.done);
			setChaptersDone(stats.chaptersDone);
		};
		update();
		window.addEventListener(PROGRESS_EVENT, update);
		window.addEventListener('storage', update);
		return () => {
			window.removeEventListener(PROGRESS_EVENT, update);
			window.removeEventListener('storage', update);
		};
	}, [chapters]);

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
				compact={false}
			/>
		</section>
	);
}
