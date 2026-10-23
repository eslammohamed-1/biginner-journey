import { useEffect, useState } from 'preact/hooks';
import type { ChapterRef } from '../lib/types';
import {
	PROGRESS_EVENT,
	bookStats,
	percent,
	perChapterStats,
	readProgress,
	type ProgressStore,
} from '../lib/progress';
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

	const allChapters = books.flatMap((book) => book.chapters);
	const overall = store ? bookStats(allChapters, store) : null;
	const overallPct = overall ? percent(overall.done, overall.total) : 0;
	const booksCompleted = store
		? books.filter((book) => {
				const st = bookStats(book.chapters, store);
				return st.total > 0 && st.done === st.total;
			}).length
		: 0;

	const reviewLinks: { href: string; label: string; count: number }[] = [];
	if (store) {
		for (const book of books) {
			const details = perChapterStats(book.slug, book.chapters, store);
			for (const ch of Object.values(details)) {
				const needReview = ch.revealed + (ch.complete ? 0 : ch.retried);
				if (ch.revealed > 0 || (!ch.complete && ch.retried > 0)) {
					reviewLinks.push({
						href: `${base}${book.slug}/${ch.file}/`,
						label: `${book.title} · ${ch.file.toUpperCase()}`,
						count: needReview,
					});
				}
			}
		}
	}

	return (
		<div class="home-dashboard">
			<section class="journey-summary" aria-label="ملخص رحلتك التعليمية">
				<div class="journey-stats-grid">
					<div class="journey-stat-card">
						<span class="journey-stat-val">{overall ? overall.done : '…'}</span>
						<span class="journey-stat-lbl">من {overall ? overall.total : 2069} تمرين محلول ({overallPct}%)</span>
					</div>
					<div class="journey-stat-card">
						<span class="journey-stat-val">{overall ? overall.chaptersDone : '…'}</span>
						<span class="journey-stat-lbl">من {allChapters.length} فصل مكتمل</span>
					</div>
					<div class="journey-stat-card">
						<span class="journey-stat-val">{store ? booksCompleted : '…'}</span>
						<span class="journey-stat-lbl">من {books.length} كتب مكتملة</span>
					</div>
				</div>
				{reviewLinks.length > 0 && (
					<div class="journey-review-box">
						<strong>🎯 فصول فيها أسئلة تحتاج مراجعة أو إعادة محاولة:</strong>
						<div class="journey-review-pills">
							{reviewLinks.slice(0, 6).map((item) => (
								<a key={item.href} class="journey-review-pill" href={item.href}>
									{item.label}
								</a>
							))}
						</div>
					</div>
				)}
			</section>

			<div class="book-grid">
				{books.map((book) => {
					const total = book.chapters.reduce((sum, chapter) => sum + chapter.ids.length, 0);
					const stats = store ? bookStats(book.chapters, store) : null;
					const isBookDone = stats && total > 0 && stats.done === total;
					const href = `${base}${book.slug}/`;
					return (
						<article class={`book-card${isBookDone ? ' is-book-complete' : ''}`} key={book.slug}>
							<a class="book-card-link" href={href}>
								<div class="book-card-top">
									<span class="book-num">{book.number}</span>
									<span class="book-meta-badge">
										{book.chapters.length} فصل · {total} تمرين
									</span>
								</div>
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
									weakCount={stats?.weakCount ?? 0}
									compact
								/>
							)}
						</article>
					);
				})}
			</div>
		</div>
	);
}
