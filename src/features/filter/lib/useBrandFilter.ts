import { useBrandsQuery } from '@/entities/brand'

export default function useBrandFilter () {
	return useBrandsQuery().data ?? []
}
