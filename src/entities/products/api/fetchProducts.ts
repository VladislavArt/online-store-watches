import {
	ProductSchema,
	type ProductQueryParams,
	type TProduct
} from '@/shared/types/product.types'

export async function fetchProducts(
	params: ProductQueryParams,
	signal?: AbortSignal
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
		const response = await fetch(`${BASE_URL}/products?${query.toString()}`, {
			signal
		})
		const result = await response.json()
		return ProductSchema.array().parse(result)
	} catch (error) {

		if (error instanceof Error && error.name === 'AbortError') {
			return []
		}

		if (typeof window === 'undefined') {
			return []
		}
		
		throw error
	}
}
