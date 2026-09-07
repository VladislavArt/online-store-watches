import Image from 'next/image'

export function CartIcon() {
	return (
		<button
			type="button"
			aria-label="Корзина"
			className="pr-8 cursor-pointer focus:outline-hidden"
		>
			<Image
				src="/money.png"
				alt="cart"
				width={32}
				height={32}
			/>
		</button>
	)
}
