import type { ChapterRef, ItemState } from './types';

export const PROGRESS_KEY = 'bj-progress-v1';
export const PROGRESS_EVENT = 'bj-progress';

export type ChapterState = {
	items: Record<string, ItemState>;
};

export type ProgressStore = Record<string, ChapterState>;

export function chapterKey(book: string, chapterFile: string): string {
	return `${book}/${chapterFile}`;
}

export function readProgress(): ProgressStore {
	if (typeof localStorage === 'undefined') return {};
	try {
		const raw = localStorage.getItem(PROGRESS_KEY);
		if (!raw) return {};
		const parsed = JSON.parse(raw) as ProgressStore;
		if (!parsed || typeof parsed !== 'object' || Array.isArray(parsed)) return {};
		return parsed;
	} catch {
		return {};
	}
}

export function writeProgress(store: ProgressStore): void {
	localStorage.setItem(PROGRESS_KEY, JSON.stringify(store));
	window.dispatchEvent(new Event(PROGRESS_EVENT));
}

export function updateItem(book: string, chapterFile: string, id: string, item: ItemState): void {
	const store = readProgress();
	const key = chapterKey(book, chapterFile);
	const chapter = store[key] ?? { items: {} };
	chapter.items[id] = item;
	store[key] = chapter;
	writeProgress(store);
}

export function resetChapter(book: string, chapterFile: string): void {
	const store = readProgress();
	delete store[chapterKey(book, chapterFile)];
	writeProgress(store);
}

export type BookStat = {
	done: number;
	total: number;
	chaptersDone: number;
	chaptersWith: number;
};

export function bookStats(chapters: readonly ChapterRef[], store: ProgressStore = readProgress()): BookStat {
	const solved = new Set<string>();
	for (const chapter of Object.values(store)) {
		if (!chapter?.items) continue;
		for (const [id, item] of Object.entries(chapter.items)) {
			if (item?.solved) solved.add(id);
		}
	}
	const withExercises = chapters.filter((chapter) => chapter.ids.length > 0);
	let done = 0;
	let total = 0;
	let chaptersDone = 0;
	for (const chapter of withExercises) {
		total += chapter.ids.length;
		const chapterDone = chapter.ids.filter((id) => solved.has(id)).length;
		done += chapterDone;
		if (chapterDone === chapter.ids.length) chaptersDone += 1;
	}
	return { done, total, chaptersDone, chaptersWith: withExercises.length };
}

export function percent(done: number, total: number): number {
	if (total <= 0) return 0;
	return Math.round((done / total) * 100);
}
