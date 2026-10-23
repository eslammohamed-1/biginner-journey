import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';
import preact from '@astrojs/preact';
import { books } from './src/data/books.ts';

export default defineConfig({
	site: 'https://eslammohamed-1.github.io',
	base: '/biginner-journey',
	integrations: [
		starlight({
			title: 'رحلة المبتدئ',
			description: 'كتب المسارات الجانبية',
			defaultLocale: 'root',
			locales: {
				root: {
					label: 'العربية',
					lang: 'ar',
					dir: 'rtl',
				},
			},
			logo: { src: './src/assets/logo.svg' },
			favicon: '/favicon.svg',
			pagefind: true,
			lastUpdated: false,
			customCss: [
				'@fontsource/cairo/400.css',
				'@fontsource/cairo/600.css',
				'@fontsource/cairo/700.css',
				'./src/styles/custom.css',
			],
			components: {
				Head: './src/components/Head.astro',
				MarkdownContent: './src/components/MarkdownContent.astro',
			},
			sidebar: books.map((book) => ({
				label: book.sidebarLabel,
				collapsed: true,
				items: [{ autogenerate: { directory: book.slug } }],
			})),
		}),
		preact(),
	],
});
