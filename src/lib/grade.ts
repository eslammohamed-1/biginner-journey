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

/** Returns which items in `current` are already in their exact `correct` position. */
export function orderItemStatus(current: readonly string[], correct: readonly string[]): boolean[] {
	return current.map((item, index) => item === correct[index]);
}

/** Bounded Levenshtein edit distance for typo detection. */
export function editDistance(a: string, b: string): number {
	if (a === b) return 0;
	if (Math.abs(a.length - b.length) > 4) return 99;
	const dp: number[] = Array.from({ length: b.length + 1 }, (_, i) => i);
	for (let i = 1; i <= a.length; i++) {
		let prev = dp[0]!;
		dp[0] = i;
		for (let j = 1; j <= b.length; j++) {
			const temp = dp[j]!;
			const cost = a[i - 1] === b[j - 1] ? 0 : 1;
			dp[j] = Math.min(dp[j]! + 1, dp[j - 1]! + 1, prev + cost);
			prev = temp;
		}
	}
	return dp[b.length]!;
}

function canonicalizeCodeSpacing(input: string): string {
	return normalizeAnswer(input)
		.replace(/'/g, '"')
		.replace(/\s*([=,:()])\s*/g, '$1');
}

/**
 * Provides a targeted pedagogical hint when a learner's command/code answer is very close
 * (e.g., single vs double quotes, spacing around `=`, case sensitivity, or 1–2 char typo).
 */
export function diagnoseCommand(
	input: string,
	accepted: readonly string[],
	patterns: readonly string[] = [],
): string | null {
	const norm = normalizeAnswer(input);
	if (!norm) return null;

	const quoteNormalized = norm.replace(/'/g, '"');
	const quoteFlipped = norm.replace(/"/g, "'");
	if (
		accepted.some(
			(ans) =>
				normalizeAnswer(ans).replace(/'/g, '"') === quoteNormalized ||
				normalizeAnswer(ans) === quoteFlipped,
		) ||
		matchesCommand(quoteNormalized, accepted, patterns)
	) {
		return 'قريب جداً! جرّب استبدال علامات التنصيص المفردة (\') بالمزدوجة (") أو العكس.';
	}

	const codeNorm = canonicalizeCodeSpacing(norm);
	if (accepted.some((ans) => canonicalizeCodeSpacing(ans) === codeNorm)) {
		return 'قريب جداً! راجع المسافات حول علامة `=` أو الفواصل والأقواس.';
	}

	if (accepted.some((ans) => normalizeAnswer(ans).toLowerCase() === norm.toLowerCase())) {
		return 'قريب جداً! الأمر صح لكن انتبه لحالة الحروف الكبيرة والصغيرة (Case Sensitivity).';
	}

	if (accepted.some((ans) => editDistance(norm, normalizeAnswer(ans)) <= 2)) {
		return 'قريب جداً من الإجابة الصحيحة! راجع الحروف أو الـ Flags حرفاً بحرف.';
	}

	return null;
}

/**
 * Provides a targeted pedagogical hint when a learner's fill-in-the-blank answer is very close.
 */
export function diagnoseFill(
	inputs: readonly string[],
	blanks: readonly (readonly string[])[],
): string | null {
	if (inputs.length !== blanks.length) return null;

	for (let i = 0; i < blanks.length; i++) {
		const raw = normalizeFill(inputs[i] ?? '');
		if (!raw) continue;
		const targets = (blanks[i] ?? []).map((ans) => normalizeFill(ans));
		const matched = targets.some(
			(target) => raw === target || foldArabic(raw) === foldArabic(target),
		);
		if (matched) continue;

		const strippedQuotes = raw.replace(/^['"`]+|['"`]+$/g, '').trim();
		if (targets.some((target) => strippedQuotes === target)) {
			return 'قريب جداً! اكتب الكلمة المطلوبة في الفراغ مباشرة بدون علامات تنصيص.';
		}

		if (targets.some((target) => raw.toLowerCase() === target.toLowerCase())) {
			return 'قريب جداً! الكلمة صحيحة لكن انتبه لحالة الحروف الكبيرة والصغيرة (Capital / Small).';
		}

		if (targets.some((target) => editDistance(raw, target) <= 2 && target.length >= 3)) {
			return 'قريب جداً من الكلمة الصحيحة! راجع ترتيب أو إملاء الحروف.';
		}
	}

	return null;
}

/**
 * Stable shuffle so server HTML and the hydrated page show the same order.
 * `avoidIdentity` (default on, for ordering puzzles) never returns the input order.
 * Turn it off for answer options, or two-option questions would always swap.
 */
export function seededShuffle<T>(items: readonly T[], seed: string, avoidIdentity = true): T[] {
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
	if (avoidIdentity && arr.length > 1 && arr.every((entry, index) => entry.index === index)) {
		const first = arr.shift();
		if (first) arr.push(first);
	}
	return arr.map((entry) => entry.item);
}
