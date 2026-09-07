'use client'

import { ProductCard } from '@/entities/product'
import { useFilteredProducts } from '../lib/useFilteredProducts'

export function ProductsCatalog() {
	const { products, isError, isLoading } = useFilteredProducts()

	if (isLoading) {
		return (
			<div className="text-sm text-secondary font-main">Загрузка часов...</div>
		)
	}

	if (isError || !products) {
		return (
			<div className="text-sm text-red-500 font-main">
				Ошибка загрузки часов
			</div>
		)
	}

	if (products.length === 0) {
		return (
			<div className="text-sm text-red-500 font-main">
				Нет продуктов для отображения. Поменяйте значение фильтра
			</div>
		)
	}

	return (
		<div className="grid pt-12 grid-cols-3 gap-5">
			{products.map((product, index) => (
				<ProductCard
					key={product.id}
					product={product}
					index={index}
				/>
			))}
		</div>
	)
}
