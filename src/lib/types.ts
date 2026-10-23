export type Level = 'easy' | 'medium' | 'think';

export type ChoiceOption = {
	text: string;
	why: string;
};

type Base = {
	id: string;
	level: Level;
	explanation: string;
};

export type McqExercise = Base & {
	type: 'mcq';
	question: string;
	options: ChoiceOption[];
	correct: number;
};

export type ScenarioExercise = Base & {
	type: 'scenario';
	scenario: string;
	question: string;
	options: ChoiceOption[];
	correct: number;
};

export type OrderExercise = Base & {
	type: 'order';
	prompt: string;
	/** Correct order. The UI shuffles a copy for display. */
	items: string[];
};

export type CommandExercise = Base & {
	type: 'command';
	prompt: string;
	accepted: string[];
	/** Optional regexes. A match on any pattern also counts as correct. */
	patterns?: string[];
	hint?: string;
};

export type FillExercise = Base & {
	type: 'fill';
	prompt: string;
	/** Text with one or more `___` placeholders. */
	template: string;
	/** `blanks[i]` is the list of accepted answers for placeholder i. */
	blanks: string[][];
	hint?: string;
};

export type Exercise =
	| McqExercise
	| ScenarioExercise
	| OrderExercise
	| CommandExercise
	| FillExercise;

export type ChapterExercises = {
	book: string;
	chapter: number;
	chapterFile: string;
	title: string;
	count: number;
	exercises: Exercise[];
};

export type ChapterRef = {
	file: string;
	ids: string[];
};

export type ItemState = {
	solved: boolean;
	checked?: boolean;
	choice?: number;
	texts?: string[];
	order?: string[];
};
