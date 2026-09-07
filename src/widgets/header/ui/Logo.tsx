import Link from 'next/link'

export function Logo() {
	return (
		<Link
			href={'/'}
			className="text-3xl font-headline font-extrabold border-r border-secondary/70 py-13 pr-12 flex items-center self-stretch focus:outline-hidden"
		>
			WWW
			<span className="uppercase tracking-[0.3em] pl-1">ATCHER</span>
		</Link>
	)
}
