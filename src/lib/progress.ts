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

type ProgressFile = {
	app: 'biginner-journey';
	version: 1;
	exportedAt: string;
	progress: ProgressStore;
};

export function exportProgress(): string {
	const file: ProgressFile = {
		app: 'biginner-journey',
		version: 1,
		exportedAt: new Date().toISOString(),
		progress: readProgress(),
	};
	return JSON.stringify(file, null, 2);
}

/**
 * Merges an exported file into the saved progress. A solved item is never
 * downgraded, so importing an older file can't erase newer work.
 * Returns the number of chapters in the file, or throws on a bad file.
 */
export function importProgress(text: string): number {
	const parsed = JSON.parse(text) as Partial<ProgressFile>;
	const incoming = parsed?.progress;
	if (parsed?.app !== 'biginner-journey' || !incoming || typeof incoming !== 'object' || Array.isArray(incoming)) {
		throw new Error('bad file');
	}
	const store = readProgress();
	let chapters = 0;
	for (const [key, chapter] of Object.entries(incoming)) {
		if (!chapter?.items || typeof chapter.items !== 'object') continue;
		chapters += 1;
		const target = store[key] ?? { items: {} };
		for (const [id, item] of Object.entries(chapter.items)) {
			if (!item || typeof item !== 'object') continue;
			const current = target.items[id];
			if (current?.solved && !item.solved) continue;
			target.items[id] = item;
		}
		store[key] = target;
	}
	writeProgress(store);
	return chapters;
}

export const LAST_KEY = 'bj-last-v1';

export type LastVisited = {
	href: string;
	title: string;
	bookTitle: string;
};

export function readLastVisited(): LastVisited | null {
	if (typeof localStorage === 'undefined') return null;
	try {
		const raw = localStorage.getItem(LAST_KEY);
		if (!raw) return null;
		const parsed = JSON.parse(raw) as LastVisited;
		return parsed && typeof parsed.href === 'string' && typeof parsed.title === 'string' ? parsed : null;
	} catch {
		return null;
	}
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
