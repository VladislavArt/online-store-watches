import { prefetchProductDetails } from '@/entities/products'
import type { TProductId } from '@/shared/types/filter.types'
import { ProductDetailsPage } from '@/views/product-details'
import {
	dehydrate,
	HydrationBoundary,
	QueryClient
} from '@tanstack/react-query'

interface Props {
	params: Promise<{ id: TProductId }>
}

export default async function ProductPage({ params }: Props) {
	const { id } = await params
	const queryClient = new QueryClient()

	await prefetchProductDetails(queryClient, id)

	return (
		<HydrationBoundary state={dehydrate(queryClient)}>
			<ProductDetailsPage />
		</HydrationBoundary>
	)
}
