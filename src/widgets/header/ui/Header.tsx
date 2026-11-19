'use client'

import { Cart, CartOpen } from '@/features/cart'
import { Favorites } from '@/features/favorites'
import { Search } from '@/features/search-products'
import { Logo } from './Logo'
import { Navigation } from './Navigation'

export function Header() {
	return (
		<header className="w-full bg-surface border-b border-secondary/70 sticky top-0 z-50">
			<div className="container flex justify-between">
				<div className="flex items-center">
					<Logo />
					<Navigation />
				</div>

				<div className="flex gap-16">
					<Search />
					<Favorites />
					<Cart />
				</div>
			</div>
			<CartOpen />
		</header>
	)
}
