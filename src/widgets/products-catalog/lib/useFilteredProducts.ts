import { fetchProducts } from '@/entities/product'
import { ProductQuerySchema, type ProductQueryParams } from '@/shared/types/filter.types'
import { keepPreviousData, useQuery } from '@tanstack/react-query'
import { useSearchParams } from 'next/navigation'

export function useFilteredProducts() {
	const searchParams = useSearchParams()

	const rawParams = {
		brandId: searchParams.getAll('brandId'),
		color: searchParams.getAll('colorId'),
		caseShape: searchParams.getAll('caseShape'),
		price_gte: searchParams.get('price_gte'),
		price_lte: searchParams.get('price_lte'),
		waterResistance: searchParams.get('waterResistance') || undefined
	}

	const queryParams: ProductQueryParams = ProductQuerySchema.parse(rawParams)

	const {
		data: products = [],
		isLoading,
		isError
	} = useQuery({
		queryKey: ['products', queryParams],
		queryFn: () => fetchProducts(queryParams),
		placeholderData: keepPreviousData
	})

	return { products, isLoading, isError }
}
