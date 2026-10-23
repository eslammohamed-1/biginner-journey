import assert from 'node:assert/strict';
import { readdirSync, readFileSync } from 'node:fs';
import { join } from 'node:path';
import {
	diagnoseCommand,
	diagnoseFill,
	matchesAccepted,
	matchesCommand,
	matchesFill,
	normalizeAnswer,
	orderItemStatus,
	sameOrder,
	seededShuffle,
} from '../src/lib/grade.ts';

assert.equal(matchesAccepted('  type   -a \t echo  ', ['type -a echo']), true);
assert.equal(matchesAccepted('$ type -a echo', ['type -a echo']), true);
assert.equal(matchesAccepted('% type -a echo;', ['type -a echo']), true);
assert.equal(matchesAccepted('type -a echo;', ['type -a echo']), true);
assert.equal(matchesAccepted('type -a echo;;', ['type -a echo;;']), true);
assert.equal(matchesAccepted(`git config --global user.name 'Sara Ahmed'`, ['git config --global user.name "Sara Ahmed"']), false);
assert.equal(matchesAccepted('ls', ['pwd']), false);

// Smart diagnostics tests
assert.ok(
	diagnoseCommand(`git config --global user.name 'Sara Ahmed'`, ['git config --global user.name "Sara Ahmed"'])?.includes(
		'علامات التنصيص',
	),
);
assert.ok(
	diagnoseCommand('response = client.responses.create(model = "gpt-6-luna")', [
		'response = client.responses.create(model="gpt-6-luna")',
	])?.includes('المسافات'),
);
assert.ok(diagnoseCommand('TYPE -a echo', ['type -a echo'])?.includes('حالة الحروف'));
assert.ok(diagnoseCommand('typ -a echo', ['type -a echo'])?.includes('حرفاً بحرف'));
assert.equal(diagnoseCommand('completely unrelated command', ['type -a echo']), null);

assert.equal(matchesFill(['  ppid '], [['ppid']]), true);
assert.equal(matchesFill(['PPID'], [['ppid']]), false);
assert.equal(matchesFill(['كِتاب'], [['كتاب']]), true);
assert.equal(matchesFill(['Closes'], [['Fixes', 'closes', 'Closes']]), true);

assert.ok(diagnoseFill(['PPID'], [['ppid']])?.includes('حالة الحروف'));
assert.ok(diagnoseFill(['"ppid"'], [['ppid']])?.includes('علامات تنصيص'));
assert.ok(diagnoseFill(['ppd'], [['ppid']])?.includes('إملاء'));

const lsPattern = String.raw`^ls\s+-(?=[lahG]*l)(?=[lahG]*a)(?=[lahG]*h)[lahG]+$`;
assert.equal(matchesCommand('$ ls   -lah;', ['ls -lah'], [lsPattern]), true);
assert.equal(matchesCommand('ls   -ahl', ['ls -lah'], [lsPattern]), true);
assert.equal(matchesCommand('ls -la', ['ls -lah'], [lsPattern]), false);
assert.equal(matchesCommand('definitely-not', ['ls -lah'], [lsPattern]), false);

const items = ['أ', 'ب', 'ج', 'د'];
const shuffled = seededShuffle(items, 'seed-a');
assert.deepEqual(seededShuffle(items, 'seed-a'), shuffled);
assert.equal(shuffled.length, items.length);
assert.equal(new Set(shuffled).size, items.length);
assert.equal(sameOrder(shuffled, items), false);
assert.equal(sameOrder(items, items), true);
assert.deepEqual(orderItemStatus(['أ', 'ج', 'ب', 'د'], items), [true, false, false, true]);

type Exercise = {
	type: string;
	accepted?: string[];
	patterns?: string[];
	blanks?: string[][];
	items?: string[];
};

const root = new URL('../src/content/exercises/', import.meta.url);
function walk(dir: string): string[] {
	const out: string[] = [];
	for (const entry of readdirSync(dir, { withFileTypes: true })) {
		const path = join(dir, entry.name);
		if (entry.isDirectory()) out.push(...walk(path));
		else if (entry.name.endsWith('.json')) out.push(path);
	}
	return out;
}

let commands = 0;
let fills = 0;
let orders = 0;
for (const file of walk(root.pathname)) {
	const data = JSON.parse(readFileSync(file, 'utf8')) as { exercises: Exercise[] };
	for (const exercise of data.exercises) {
		if (exercise.type === 'command' && exercise.accepted) {
			commands += 1;
			assert.equal(
				matchesCommand(exercise.accepted[0] ?? '', exercise.accepted, exercise.patterns ?? []),
				true,
				file,
			);
			const canonical = normalizeAnswer(exercise.accepted[0] ?? '');
			assert.equal(matchesCommand(`$ ${canonical};`, exercise.accepted, exercise.patterns ?? []), true, file);
			for (const pattern of exercise.patterns ?? []) {
				const re = new RegExp(pattern);
				const hit = exercise.accepted.some((answer) => re.test(normalizeAnswer(answer)));
				assert.equal(hit, true, `${file} pattern ${pattern}`);
			}
			assert.equal(matchesCommand('___nope___', exercise.accepted, exercise.patterns ?? []), false, file);
		}
		if (exercise.type === 'fill' && exercise.blanks) {
			fills += 1;
			assert.equal(
				matchesFill(
					exercise.blanks.map((blank) => blank[0] ?? ''),
					exercise.blanks,
				),
				true,
				file,
			);
		}
		if (exercise.type === 'order' && exercise.items) {
			orders += 1;
			assert.equal(sameOrder(exercise.items, exercise.items), true);
		}
	}
}

assert.ok(commands > 100);
assert.ok(fills > 50);
assert.ok(orders > 40);
console.log(`grade ok: ${commands} command, ${fills} fill, ${orders} order`);
