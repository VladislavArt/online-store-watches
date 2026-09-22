import { fetchProductById } from '@/entities/products/api/fetchProductById'
import type { TProductId } from '@/shared/types/filter.types'
import { useSuspenseQuery } from '@tanstack/react-query'

export function useGetProduct(id: TProductId) {
	return useSuspenseQuery({
		queryKey: ['product', id],
		queryFn: () => fetchProductById(id)
	})
}
