import { MAX_PRICE } from '@/shared/config/filters'
import { useState } from 'react'
import useActiveFiltersKey from './useActiveFiltersKey'

export default function useRangeSlider() {
	const { rangeMinPrice, rangeMaxPrice } = useActiveFiltersKey()

	const urlMin = Number(rangeMinPrice) || 0
	const urlMax = Number(rangeMaxPrice) || MAX_PRICE

	const [ localValue, setLocalValue ] = useState<[number, number]>(() => [urlMin, urlMax])
	const [ prevUrl, setPrevUrl ] = useState({min: urlMin, max: urlMax})

	if (urlMin !== prevUrl.min || urlMax !== prevUrl.max) {
		setPrevUrl({min: urlMin, max: urlMax})
		setLocalValue([urlMin, urlMax])
	}

	return { localValue, setLocalValue }
}
