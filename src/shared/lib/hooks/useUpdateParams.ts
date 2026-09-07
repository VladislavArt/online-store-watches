import { MAX_PRICE } from '@/shared/config/filters'
import { usePathname, useRouter, useSearchParams } from 'next/navigation'
import { useTransition } from 'react'

export default function useUpdateParams() {
	const router = useRouter()
	const pathname = usePathname()
	const searchParams = useSearchParams()

	const [isPending, startTransition] = useTransition()

	const ARRAY_FILTER = ['brandId', 'colorId', 'caseShape']

	const updateParams = (key: string, value: string) => {
		const params = new URLSearchParams(searchParams.toString())

		if (value === 'all') {
			params.delete(key)
		} else if (ARRAY_FILTER.includes(key)) {
			if (params.has(key, value)) {
				params.delete(key, value)
			} else {
				params.append(key, value)
			}
		} else {
			params.set(key, value)
		}

		startTransition(() => {
			router.replace(`${pathname}?${params.toString()}`, {
				scroll: false
			})
		})
	}

	const updateRangeParams = (min: number, max: number) => {
		const params = new URLSearchParams(searchParams.toString())

		if (min === 0) {
			params.delete('price_gte')
		} else {
			params.set('price_gte', String(min))
		}

		if (max === MAX_PRICE) {
			params.delete('price_lte')
		} else {
			params.set('price_lte', String(max))
		}

		startTransition(() => {
			router.replace(`${pathname}?${params.toString()}`, {
				scroll: false
			})
		})
	}

	const resetFilters = () => {
		const params = new URLSearchParams(searchParams.toString())

		params.delete('brandId')
		params.delete('colorId')
		params.delete('caseShape')
		params.delete('waterResistance')
		params.delete('price_gte')
		params.delete('price_lte')

		startTransition(() => {
			router.replace(`${pathname}?${params.toString()}`, {
				scroll: false
			})
		})
	}

	return {
		updateParams,
		updateRangeParams,
		resetFilters,
		isPending
	}
}
