import { ProductSchema, type ProductQueryParams, type TProduct } from '@/shared/types/filter.types'
import z from 'zod'

export async function fetchProducts(
	params: ProductQueryParams
): Promise<TProduct[]> {
	const BASE_URL = 'http://localhost:4000'
	const query = new URLSearchParams()

	Object.entries(params).forEach(([key, value]) => {
		if (value === undefined || value === null) return

		if (Array.isArray(value)) {
			value.forEach(id => query.append(key, String(id)))
		} else {
			query.append(key, String(value))
		}
	})

	try {
		const response = await fetch(`${BASE_URL}/products?${query.toString()}`)
		const result = await response.json()
		return ProductSchema.array().parse(result)
	} catch (error) {
		if (error instanceof z.ZodError) {
			console.error('КРИТИЧЕСКАЯ ОШИБКА ВАЛИДАЦИИ ПРОДУКТОВ:', error)
		} else {
			console.error('Ошибка при получении продуктов с сервера:', error)
		}
		throw error
	}
}
