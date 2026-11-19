'use client'

import Image from 'next/image'
import { useStore } from 'zustand'
import { cartStore } from '../model/cart.store'

export function Cart() {
	const setIsOpen = useStore(cartStore, state => state.setIsOpen)
	const totalCount = useStore(cartStore, state => state.totalCount)

	return (
		<button
			type="button"
			aria-label="Корзина"
			className="pr-8 cursor-pointer focus:outline-hidden relative group active:scale-95 transition-transform duration-200"
			onClick={setIsOpen}
		>
			<div className="relative flex items-center justify-center w-8 h-8">
				<Image
					src="/money.png"
					alt="cart"
					width={32}
					height={32}
				/>

				{totalCount > 0 && (
					<span className="absolute -top-1 -right-1.5 flex h-6 w-6 items-center justify-center">
						<span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-amber-500/40 opacity-75"></span>

						<span className="relative inline-flex h-6 w-6 items-center justify-center rounded-full bg-amber-500 text-[15px] font-bold font-mono leading-none text-zinc-950 shadow-md shadow-amber-500/20 select-none">
							{totalCount}
						</span>
					</span>
				)}
			</div>
		</button>
	)
}
