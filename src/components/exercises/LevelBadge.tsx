import type { Level } from '../../lib/types';

const LEVELS: Record<Level, { label: string; className: string }> = {
	easy: { label: 'سهل', className: 'lvl-easy' },
	medium: { label: 'متوسط', className: 'lvl-medium' },
	think: { label: 'فكّر', className: 'lvl-think' },
};

export function LevelBadge({ level }: { level: Level }) {
	const meta = LEVELS[level];
	return <span class={`lvl ${meta.className}`}>{meta.label}</span>;
}
