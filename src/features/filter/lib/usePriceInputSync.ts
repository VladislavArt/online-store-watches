import { usePathname, useRouter, useSearchParams } from 'next/navigation'
import { useTransition } from 'react'

export function usePriceInputSync() {
	const router = useRouter()
	const pathname = usePathname()
	const searchParams = useSearchParams()

	const [, startTransition ] = useTransition()

	const updatePriceInput = (id: string) => (values: { floatValue: number | undefined }) => {
		const params = new URLSearchParams(searchParams.toString())

		const queryKey = id === 'min' ? 'price_gte' : 'price_lte'
		const currentNumValue = values.floatValue

		if (currentNumValue === undefined) {
			params.delete(queryKey)
		} else {
			params.set(queryKey, String(currentNumValue))
		}

		startTransition(() => {
			router.replace(`${pathname}?${params.toString()}`, {
				scroll: false
			})
		})
	}

	return { updatePriceInput }
}
