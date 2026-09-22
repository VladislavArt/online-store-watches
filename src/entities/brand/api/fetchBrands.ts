import { BrandSchema, type TBrand } from '@/shared/types/filter.types'

export async function fetchBrands(): Promise<TBrand[]> {
	try {
		const response = await fetch('http://localhost:4000/brands')
		const result = await response.json()
		return BrandSchema.array().parse(result)
	} catch (error) {
		if (typeof window === 'undefined') {
			return []
		}
		throw error
	}
}
