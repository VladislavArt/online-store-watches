import Image from 'next/image'

export function Search() {
	return (
		<button
			type="button"
			aria-label="Поиск"
			className="cursor-pointer focus:outline-hidden border-x border-secondary/70 px-8"
		>
			<Image
				src="/search-icon.png"
				alt="search"
				width={40}
				height={40}
			/>
		</button>
	)
}
