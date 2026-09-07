import Image from 'next/image'

export function Favorites () {
	return (
		<button
			type="button"
			aria-label="Избранное"
			className="cursor-pointer focus:outline-hidden"
		>
			<Image
				src="/heart.png"
				alt="cart"
				width={29}
				height={29}
			/>
		</button>
	)
}
