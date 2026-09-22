'use client'

import { ProductDetails } from '@/widgets/product-details'
import { useQueryErrorResetBoundary } from '@tanstack/react-query'
import { Suspense } from 'react'
import { ErrorBoundary } from 'react-error-boundary'
import { ProductDetailsError } from './ProductDetailsError'
import { ProductDetailsSkeleton } from './ProductDetailsSkeleton'

export function ProductDetailsPage() {
	const { reset } = useQueryErrorResetBoundary()

	return (
		<main className="container mx-auto py-8">
			<ErrorBoundary
				FallbackComponent={ProductDetailsError}
				onReset={reset}
			>
				<Suspense fallback={<ProductDetailsSkeleton />}>
					<ProductDetails />
				</Suspense>
			</ErrorBoundary>
		</main>
	)
}
