import { useRef, useState } from 'preact/hooks';
import { exportProgress, importProgress } from '../lib/progress';

type Status = { kind: 'ok' | 'error'; text: string } | null;

/** Backup and restore, since progress only lives in this browser's localStorage. */
export default function ProgressTools() {
	const fileRef = useRef<HTMLInputElement>(null);
	const [status, setStatus] = useState<Status>(null);

	function download() {
		const blob = new Blob([exportProgress()], { type: 'application/json' });
		const url = URL.createObjectURL(blob);
		const link = document.createElement('a');
		link.href = url;
		link.download = `biginner-journey-progress-${new Date().toISOString().slice(0, 10)}.json`;
		document.body.append(link);
		link.click();
		link.remove();
		URL.revokeObjectURL(url);
		setStatus({ kind: 'ok', text: 'اتحفظ الملف. احتفظ بيه في مكان آمن.' });
	}

	async function upload(event: Event) {
		const input = event.currentTarget as HTMLInputElement;
		const file = input.files?.[0];
		input.value = '';
		if (!file) return;
		try {
			const chapters = importProgress(await file.text());
			setStatus({ kind: 'ok', text: `اترجع تقدّمك في ${chapters} فصل.` });
		} catch {
			setStatus({ kind: 'error', text: 'الملف ده مش ملف تقدّم من الموقع.' });
		}
	}

	return (
		<section class="progress-tools" aria-labelledby="progress-tools-title">
			<h2 id="progress-tools-title">نسخة احتياطية من تقدّمك</h2>
			<p>
				تقدّمك متخزن في المتصفح ده بس. لو هتمسح بيانات المتصفح أو هتذاكر من جهاز تاني، نزّل نسخة وارفعها
				هناك.
			</p>
			<div class="ex-actions">
				<button id="progress-export" class="ex-btn" type="button" onClick={download}>
					نزّل تقدّمي
				</button>
				<button
					id="progress-import"
					class="ex-btn secondary"
					type="button"
					onClick={() => fileRef.current?.click()}
				>
					ارفع ملف تقدّم
				</button>
				<input
					ref={fileRef}
					type="file"
					accept="application/json,.json"
					hidden
					onChange={upload}
				/>
			</div>
			{status ? (
				<p class={`progress-tools-status is-${status.kind}`} role="status">
					{status.text}
				</p>
			) : null}
		</section>
	);
}
