'use client'

import { ProductCard } from '@/entities/products'
import { AddToCartButton } from '@/features/cart'
import { useFilteredProducts } from '../lib/useFilteredProducts'

export function ProductsCatalog() {
	const { data: products = [], isFetching } = useFilteredProducts()

	if (products.length === 0 && !isFetching) {
		return (
			<div className="text-sm text-secondary font-main py-8">
				Часы не найдены. Попробуйте изменить параметры фильтров.
			</div>
		)
	}

	return (
		<div
			className={`grid pt-12 grid-cols-3 gap-5 transition-opacity duration-300 ${
				isFetching ? 'opacity-40 pointer-events-none' : 'opacity-100'
			}`}
		>
			{products.map((product, index) => (
				<ProductCard
					key={product.id}
					product={product}
					index={index}
					actionButton={<AddToCartButton product={product} />}
				/>
			))}
		</div>
	)
}
