import {
	ProductSchema,
	type TProduct,
	type TProductId
} from '@/shared/types/product.types'
import z from 'zod'

export async function fetchProductById(id: TProductId): Promise<TProduct> {
	const BASE_URL = 'http://localhost:4000'

	try {
		const response = await fetch(`${BASE_URL}/products/${id}`)

		if (!response.ok) {
			throw new Error(`Ошибка сервера: ${response.status}`)
		}
		
		const result = await response.json()
		return ProductSchema.parse(result)
	} catch (error) {
		if (error instanceof z.ZodError) {
			console.error('КРИТИЧЕСКАЯ ОШИБКА ВАЛИДАЦИИ ПРОДУКТА:', error)
		} else {
			console.error('Ошибка при получении продукта с сервера:', error)
		}
		throw error
	}
}
