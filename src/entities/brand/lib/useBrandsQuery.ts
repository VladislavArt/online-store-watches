import { fetchBrands } from '@/entities/brand'
import { useSuspenseQuery } from '@tanstack/react-query'

export function useBrandsQuery() {
	return useSuspenseQuery({
		queryKey: ['brands'],
		queryFn: fetchBrands
	})
}
