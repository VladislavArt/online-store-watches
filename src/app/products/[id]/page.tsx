import { prefetchProductDetails } from '@/entities/products'
import { getQueryClient } from '@/shared/api/get-query-client'
import type { TProductId } from '@/shared/types/product.types'
import { ProductDetailsPage } from '@/views/product-details'
import { dehydrate, HydrationBoundary } from '@tanstack/react-query'

interface Props {
  params: Promise<{ id: TProductId }>
}

export default async function ProductPage({ params }: Props) {
  const { id } = await params
  const queryClient = getQueryClient()

  await prefetchProductDetails(queryClient, id)

  return (
    <HydrationBoundary state={dehydrate(queryClient)}>
      <ProductDetailsPage />
    </HydrationBoundary>
  )
}
