import { fetchBrands } from '@/entities/brand/api/fetchBrands'
import { fetchProducts } from '@/entities/product/api/fetchProducts'
import type { ProductQueryParams } from '@/shared/types/filter.types'
import { noop, type QueryClient } from '@tanstack/react-query'

export async function prefetchHomePage(queryClient: QueryClient) {
	await Promise.all([
		queryClient.query({
			queryKey: ['brands'],
			queryFn: () => fetchBrands()
		})
		.catch(noop),

		queryClient.query({
			queryKey: ['products', {}],
			queryFn: () => fetchProducts({} as ProductQueryParams)
		})
		.catch(noop)
	])
}
