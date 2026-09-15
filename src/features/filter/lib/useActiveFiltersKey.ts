import { MAX_PRICE } from '@/shared/config/filters'
import { getRawParams } from '@/shared/lib/helpers/getRawParams'
import { ProductQuerySchema } from '@/shared/types/filter.types'
import { useSearchParams } from 'next/navigation'

function useActiveFiltersKey() {
	const searchParams = useSearchParams()

	const raw = getRawParams(searchParams)
	const validateParams = ProductQuerySchema.parse(raw)

	const minValue = validateParams.price_gte ?? 0
	const maxValue = validateParams.price_lte ?? MAX_PRICE

	return {
		selectedBrandId: validateParams.brandId,
		selectedColorId: validateParams.color,
		selectedCaseShape: validateParams.caseShape,
		resistance:
			validateParams.waterResistance !== undefined
				? String(validateParams.waterResistance)
				: 'all',
		rangeMinPrice: minValue,
		rangeMaxPrice: maxValue,
		inputMinPrice: minValue === 0 ? '' : minValue,
		inputMaxPrice: maxValue === MAX_PRICE ? '' : maxValue
	}
}

export default useActiveFiltersKey
