import { getCollection } from 'astro:content';
import { books, type BookMeta } from '../data/books';
import type { ChapterExercises, ChapterRef } from './types';

export type BookCatalogEntry = BookMeta & {
	chapters: ChapterRef[];
};

export type ExerciseCatalog = {
	byKey: Map<string, ChapterExercises>;
	books: BookCatalogEntry[];
};

function chapterSort(a: string, b: string): number {
	return a.localeCompare(b, 'en', { numeric: true });
}

let cached: Promise<ExerciseCatalog> | undefined;

/** Built once per production build. Dev rebuilds every call so JSON edits show up. */
export function loadCatalog(): Promise<ExerciseCatalog> {
	if (!import.meta.env.PROD) return buildCatalog();
	cached ??= buildCatalog();
	return cached;
}

async function buildCatalog(): Promise<ExerciseCatalog> {
	const entries = await getCollection('exercises');
	const byKey = new Map<string, ChapterExercises>();

	for (const entry of entries) {
		const data = entry.data;
		const key = `${data.book}/${data.chapterFile}`;
		if (entry.id !== key) {
			throw new Error(
				`ملف التمارين src/content/exercises/${entry.id}.json لازم يبقى ${key}.json عشان book و chapterFile يطابقوا المسار.`,
			);
		}
		if (byKey.has(key)) throw new Error(`ملف تمارين مكرر: ${key}`);
		if (data.count !== data.exercises.length) {
			throw new Error(`count في ${key}.json (${data.count}) مش مساوي لعدد التمارين (${data.exercises.length}).`);
		}
		for (const exercise of data.exercises) {
			if (exercise.type === 'mcq' || exercise.type === 'scenario') {
				if (exercise.correct < 0 || exercise.correct >= exercise.options.length) {
					throw new Error(`correct خارج نطاق الاختيارات في ${exercise.id}`);
				}
			}
			if (exercise.type === 'order' && new Set(exercise.items).size !== exercise.items.length) {
				throw new Error(`في عناصر مكررة في تمرين الترتيب ${exercise.id}.`);
			}
			if (exercise.type === 'fill') {
				const holes = exercise.template.split('___').length - 1;
				if (holes !== exercise.blanks.length) {
					throw new Error(`عدد ___ في ${exercise.id} مش مساوي لعدد blanks.`);
				}
			}
		}
		byKey.set(key, data);
	}

	const catalogBooks: BookCatalogEntry[] = books.map((book) => {
		const chapters: ChapterRef[] = [];
		for (const data of byKey.values()) {
			if (data.book !== book.slug) continue;
			chapters.push({
				file: data.chapterFile,
				ids: data.exercises.map((exercise) => exercise.id),
			});
		}
		chapters.sort((a, b) => chapterSort(a.file, b.file));
		return { ...book, chapters };
	});

	return { byKey, books: catalogBooks };
}
