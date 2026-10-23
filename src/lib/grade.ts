const CURLY_SINGLE = /[\u2018\u2019\u201A\u201B\u2032]/g;
const CURLY_DOUBLE = /[\u201C\u201D\u201E\u201F\u2033\u00AB\u00BB]/g;
const INVISIBLE = /[\u200B-\u200F\u202A-\u202E\u2066-\u2069\uFEFF]/g;

/** Trim, collapse whitespace, and turn curly quotes into straight quotes. */
export function normalizeAnswer(input: string): string {
	return input
		.normalize('NFC')
		.replace(INVISIBLE, '')
		.replace(CURLY_SINGLE, "'")
		.replace(CURLY_DOUBLE, '"')
		.replace(/\s+/g, ' ')
		.trim();
}

function quotesEquivalent(a: string, b: string): boolean {
	const fold = (value: string) => value.replace(/['"]/g, '"');
	return fold(a) === fold(b);
}

export function matchesAccepted(input: string, accepted: readonly string[]): boolean {
	const norm = normalizeAnswer(input);
	return accepted.some((answer) => {
		const target = normalizeAnswer(answer);
		return norm === target || quotesEquivalent(norm, target);
	});
}

export function matchesCommand(
	input: string,
	accepted: readonly string[],
	patterns: readonly string[] = [],
): boolean {
	if (matchesAccepted(input, accepted)) return true;
	const candidates = [input.trim(), normalizeAnswer(input)];
	return patterns.some((pattern) => {
		try {
			const re = new RegExp(pattern);
			return candidates.some((candidate) => re.test(candidate));
		} catch {
			return false;
		}
	});
}

export function matchesFill(inputs: readonly string[], blanks: readonly (readonly string[])[]): boolean {
	if (inputs.length !== blanks.length) return false;
	return inputs.every((input, index) => matchesAccepted(input, blanks[index] ?? []));
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
