import { fetchBrands } from '@/entities/brand/api/fetchBrands'
import { fetchProducts } from '@/entities/product/api/fetchProducts'
import type { QueryClient } from '@tanstack/react-query'

export async function prefetchHomePage(queryClient: QueryClient) {
	await Promise.all([
		queryClient.prefetchQuery({
			queryKey: ['brands'],
			queryFn: fetchBrands
		}),
		queryClient.prefetchQuery({
			queryKey: ['products', {}],
			queryFn: () => fetchProducts({})
		})
	])
}
