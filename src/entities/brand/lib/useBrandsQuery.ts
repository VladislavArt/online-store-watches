import { fetchBrands } from '@/entities/brand'
import { useQuery } from '@tanstack/react-query'

export function useBrandsQuery() {
	return useQuery({
		queryKey: ['brands'],
		queryFn: fetchBrands
	})
}
