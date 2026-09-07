import { MAX_PRICE } from '@/shared/config/filters'
import { useSearchParams } from 'next/navigation'

function useActiveFiltersKey() {
	const searchParams = useSearchParams()

	const gte = searchParams.get('price_gte')
	const lte = searchParams.get('price_lte')

	const minValue = gte ? Number(gte) : 0
	const maxValue = lte ? Number(lte) : MAX_PRICE

	return {
		selectedBrandId: searchParams.getAll('brandId'),
		selectedColorId: searchParams.getAll('colorId'),
		selectedCaseShape: searchParams.getAll('caseShape'),
		resistance: searchParams.get('waterResistance') || 'all',
		rangeMinPrice: minValue,
		rangeMaxPrice: maxValue,
		inputMinPrice: minValue === 0 ? '' : minValue,
		inputMaxPrice: maxValue === MAX_PRICE ? '' : maxValue
	}
}

export default useActiveFiltersKey
