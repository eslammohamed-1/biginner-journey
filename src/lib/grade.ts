const INVISIBLE = /[\u200B-\u200F\u202A-\u202E\u2066-\u2069\uFEFF]/g;
const ARABIC_DIACRITICS = /[\u064B-\u0652\u0670\u0640]/g;

function stripMarks(input: string): string {
	return input.normalize('NFC').replace(INVISIBLE, '');
}

/**
 * Typed answers (commands and code lines), per exercises/SCHEMA.md:
 * trim, strip one leading `$ ` or `% `, collapse whitespace, drop one trailing `;`.
 */
export function normalizeAnswer(input: string): string {
	let value = stripMarks(input).trim();
	if (value.startsWith('$ ') || value.startsWith('% ')) value = value.slice(2);
	value = value.replace(/\s+/g, ' ');
	if (value.endsWith(';')) value = value.slice(0, -1);
	return value.trim();
}

export function matchesAccepted(input: string, accepted: readonly string[]): boolean {
	const norm = normalizeAnswer(input);
	return accepted.some((answer) => normalizeAnswer(answer) === norm);
}

export function matchesCommand(
	input: string,
	accepted: readonly string[],
	patterns: readonly string[] = [],
): boolean {
	if (matchesAccepted(input, accepted)) return true;
	const norm = normalizeAnswer(input);
	return patterns.some((pattern) => {
		try {
			return new RegExp(pattern).test(norm);
		} catch {
			return false;
		}
	});
}

/** Fill blanks: trim, case-sensitive. Arabic diacritics and tatweel are ignored. */
export function normalizeFill(input: string): string {
	return stripMarks(input).trim();
}

function foldArabic(input: string): string {
	return input.replace(ARABIC_DIACRITICS, '');
}

export function matchesFill(inputs: readonly string[], blanks: readonly (readonly string[])[]): boolean {
	if (inputs.length !== blanks.length) return false;
	return inputs.every((input, index) => {
		const norm = normalizeFill(input);
		const folded = foldArabic(norm);
		return (blanks[index] ?? []).some((answer) => {
			const target = normalizeFill(answer);
			return norm === target || folded === foldArabic(target);
		});
	});
}

export function sameOrder(current: readonly string[], correct: readonly string[]): boolean {
	if (current.length !== correct.length) return false;
	return current.every((item, index) => item === correct[index]);
}

/** Stable shuffle so server HTML and the hydrated page show the same order. */
export function seededShuffle<T>(items: readonly T[], seed: string): T[] {
	const arr = items.map((item, index) => ({ item, index }));
	let hash = 2166136261;
	for (let i = 0; i < seed.length; i++) {
		hash ^= seed.charCodeAt(i);
		hash = Math.imul(hash, 16777619);
	}
	let state = hash >>> 0;
	const rand = () => {
		state = (state + 0x6d2b79f5) | 0;
		let t = Math.imul(state ^ (state >>> 15), 1 | state);
		t = (t + Math.imul(t ^ (t >>> 7), 61 | t)) ^ t;
		return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
	};
	for (let i = arr.length - 1; i > 0; i--) {
		const j = Math.floor(rand() * (i + 1));
		const tmp = arr[i]!;
		arr[i] = arr[j]!;
		arr[j] = tmp;
	}
	if (arr.length > 1 && arr.every((entry, index) => entry.index === index)) {
		const first = arr.shift();
		if (first) arr.push(first);
	}
	return arr.map((entry) => entry.item);
}
