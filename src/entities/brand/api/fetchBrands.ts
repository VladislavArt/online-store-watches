import { BrandSchema, type TBrand } from '@/shared/types/filter.types'
import { z } from 'zod'

export async function fetchBrands(): Promise<TBrand[]> {
	try {
		const response = await fetch('http://localhost:4000/brands')
		const result = await response.json()
		return BrandSchema.array().parse(result)
	} catch (error) {
		if (error instanceof z.ZodError) {
			console.error('КРИТИЧЕСКАЯ ОШИБКА ВАЛИДАЦИИ БРЕНДОВ:', error)
		} else {
			console.error('Ошибка при получении брендов с сервера:', error)
		}
		throw error
	}
}
