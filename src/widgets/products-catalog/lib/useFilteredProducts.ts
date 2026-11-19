import { fetchProducts } from '@/entities/products'
import { getRawParams } from '@/shared/lib/helpers/getRawParams'
import {
	ProductQuerySchema,
	type ProductQueryParams
} from '@/shared/types/product.types'
import { keepPreviousData, useQuery } from '@tanstack/react-query'
import { useSearchParams } from 'next/navigation'

export function useFilteredProducts() {
	const searchParams = useSearchParams()

	const rawPrams = getRawParams(searchParams)

	const queryParams: ProductQueryParams = ProductQuerySchema.parse(rawPrams)

	return useQuery({
		queryKey: ['products', queryParams],
		queryFn: ({ signal }) => fetchProducts(queryParams, signal),
		placeholderData: keepPreviousData,
		staleTime: 5 * 60 * 1000,
		throwOnError: true
	})
}
