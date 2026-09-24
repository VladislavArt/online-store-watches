import { fetchBrands } from '@/entities/brand'
import { useSuspenseQuery } from '@tanstack/react-query'

export function useBrandsQuery() {
	return useSuspenseQuery({
		queryKey: ['brands'],
		queryFn: fetchBrands,
		staleTime: 30 * 60 * 1000,
		gcTime: 60 * 60 * 1000
	})
}
