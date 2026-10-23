type Props = { text: string };

/** Renders `code` and **bold** from the exercise strings. Everything else stays text. */
export function RichText({ text }: Props) {
	const codeParts = text.split(/(`[^`]+`)/g);
	return (
		<>
			{codeParts.map((part, index) => {
				if (part.startsWith('`') && part.endsWith('`') && part.length >= 2) {
					return (
						<code key={index} dir="ltr">
							{part.slice(1, -1)}
						</code>
					);
				}
				const boldParts = part.split(/(\*\*[^*]+\*\*)/g);
				return boldParts.map((piece, pieceIndex) => {
					if (piece.startsWith('**') && piece.endsWith('**') && piece.length >= 4) {
						return <strong key={`${index}-${pieceIndex}`}>{piece.slice(2, -2)}</strong>;
					}
					return <span key={`${index}-${pieceIndex}`}>{piece}</span>;
				});
			})}
		</>
	);
}
