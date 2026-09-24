import { fetchProductById } from '@/entities/products/api/fetchProductById'
import type { TProductId } from '@/shared/types/filter.types'
import { noop, QueryClient } from '@tanstack/react-query'

export async function prefetchProductDetails(
	queryClient: QueryClient,
	id: TProductId
) {
	await queryClient
		.query({
			queryKey: ['product', id],
			queryFn: () => fetchProductById(id)
		})
		.catch(noop)
}
