import type { ReadonlyURLSearchParams } from 'next/navigation'

export function getRawParams(searchParams: ReadonlyURLSearchParams | null) {
	return {
		brandId: searchParams?.getAll('brandId') || [],
		color: searchParams?.getAll('color') || [],
		caseShape: searchParams?.getAll('caseShape') || [],
		price_gte: searchParams?.get('price_gte') || null,
		price_lte: searchParams?.get('price_lte') || null,
		waterResistance: searchParams?.get('waterResistance') || undefined
	}
}
