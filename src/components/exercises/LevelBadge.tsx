import type { Exercise, Level } from '../../lib/types';

const LEVELS: Record<Level, { label: string; className: string }> = {
	easy: { label: 'سهل', className: 'lvl-easy' },
	medium: { label: 'متوسط', className: 'lvl-medium' },
	think: { label: 'فكّر', className: 'lvl-think' },
};

const TYPES: Record<Exercise['type'], { label: string; icon: string }> = {
	mcq: { label: 'اختيار من متعدد', icon: '◉' },
	scenario: { label: 'موقف عملي', icon: '⚡' },
	order: { label: 'ترتيب خطوات', icon: '⇅' },
	command: { label: 'أمر / كود', icon: '❯_' },
	fill: { label: 'أكمل الفراغ', icon: '✎' },
};

export function LevelBadge({ level }: { level: Level }) {
	const meta = LEVELS[level];
	return <span class={`lvl ${meta.className}`}>{meta.label}</span>;
}

export function TypeBadge({ type }: { type: Exercise['type'] }) {
	const meta = TYPES[type];
	return (
		<span class={`ex-type-badge ex-type-${type}`}>
			<span class="ex-type-icon" aria-hidden="true">
				{meta.icon}
			</span>
			{meta.label}
		</span>
	);
}
