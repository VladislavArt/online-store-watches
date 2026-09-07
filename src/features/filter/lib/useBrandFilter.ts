import { useBrandsQuery } from '@/entities/brand'

export default function useBrandFilter () {
	const { data: brands, isLoading, isError } = useBrandsQuery()

	return { brands, isLoading, isError }
}
