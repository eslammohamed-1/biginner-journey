import { useEffect, useState } from 'preact/hooks';
import type { ChapterRef } from '../lib/types';
import { PROGRESS_EVENT, bookStats, readProgress, type ProgressStore } from '../lib/progress';
import { ProgressView } from './exercises/ProgressMeter';

export type HomeBook = {
	number: string;
	slug: string;
	title: string;
	subtitle: string;
	description: string;
	chapters: ChapterRef[];
};

type Props = {
	base: string;
	books: HomeBook[];
};

export default function HomeGrid({ base, books }: Props) {
	const [store, setStore] = useState<ProgressStore | null>(null);

	useEffect(() => {
		const update = () => setStore(readProgress());
		update();
		window.addEventListener(PROGRESS_EVENT, update);
		window.addEventListener('storage', update);
		return () => {
			window.removeEventListener(PROGRESS_EVENT, update);
			window.removeEventListener('storage', update);
		};
	}, []);

	return (
		<div class="book-grid">
			{books.map((book) => {
				const total = book.chapters.reduce((sum, chapter) => sum + chapter.ids.length, 0);
				const stats = store ? bookStats(book.chapters, store) : null;
				const href = `${base}${book.slug}/`;
				return (
					<article class="book-card" key={book.slug}>
						<a class="book-card-link" href={href}>
							<span class="book-num">{book.number}</span>
							<h2>{book.title}</h2>
							<p class="book-sub">{book.subtitle}</p>
							<p class="book-desc">{book.description}</p>
						</a>
						{total === 0 ? (
							<p class="prog-soon">التمارين جاية قريب</p>
						) : (
							<ProgressView
								done={stats ? stats.done : null}
								total={total}
								chaptersDone={stats?.chaptersDone ?? 0}
								chaptersWith={book.chapters.length}
								compact
							/>
						)}
					</article>
				);
			})}
		</div>
	);
}
