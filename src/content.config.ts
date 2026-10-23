import { defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';
import { z } from 'astro/zod';
import { docsLoader } from '@astrojs/starlight/loaders';
import { docsSchema } from '@astrojs/starlight/schema';

const level = z.enum(['easy', 'medium', 'think']);
const option = z.object({
	text: z.string().min(1),
	why: z.string().min(1),
});

const exercise = z.discriminatedUnion('type', [
	z.object({
		id: z.string().min(1),
		type: z.literal('mcq'),
		level,
		question: z.string().min(1),
		options: z.array(option).min(2),
		correct: z.number().int().nonnegative(),
		explanation: z.string().min(1),
	}),
	z.object({
		id: z.string().min(1),
		type: z.literal('scenario'),
		level,
		scenario: z.string().min(1),
		question: z.string().min(1),
		options: z.array(option).min(2),
		correct: z.number().int().nonnegative(),
		explanation: z.string().min(1),
	}),
	z.object({
		id: z.string().min(1),
		type: z.literal('order'),
		level,
		prompt: z.string().min(1),
		items: z.array(z.string().min(1)).min(2),
		explanation: z.string().min(1),
	}),
	z.object({
		id: z.string().min(1),
		type: z.literal('command'),
		level,
		prompt: z.string().min(1),
		accepted: z.array(z.string().min(1)).min(1),
		patterns: z.array(z.string().min(1)).optional(),
		hint: z.string().min(1).optional(),
		explanation: z.string().min(1),
	}),
	z.object({
		id: z.string().min(1),
		type: z.literal('fill'),
		level,
		prompt: z.string().min(1),
		template: z.string().min(1),
		blanks: z.array(z.array(z.string().min(1)).min(1)).min(1),
		hint: z.string().min(1).optional(),
		explanation: z.string().min(1),
	}),
]);

const exercises = defineCollection({
	loader: glob({ pattern: '**/*.json', base: './src/content/exercises' }),
	schema: z.object({
		book: z.string().min(1),
		chapter: z.number().int().positive(),
		chapterFile: z.string().regex(/^ch\d+$/),
		title: z.string().min(1),
		count: z.number().int().nonnegative(),
		exercises: z.array(exercise).min(1),
	}),
});

export const collections = {
	docs: defineCollection({ loader: docsLoader(), schema: docsSchema() }),
	exercises,
};
