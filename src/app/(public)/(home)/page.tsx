import { HomePageSkeleton } from '@/views/home'
import { ProductsCatalog } from '@/widgets/products-catalog'
import { Sidebar } from '@/widgets/sidebar'
import {
	dehydrate,
	HydrationBoundary,
	QueryClient
} from '@tanstack/react-query'
import { Suspense } from 'react'
import { prefetchHomePage } from '../_lib/prefetchHomePage'

async function HomePage() {
	const queryClient = new QueryClient()

	await prefetchHomePage(queryClient)

	return (
		<HydrationBoundary state={dehydrate(queryClient)}>
			<Suspense fallback={<HomePageSkeleton />}>
				<div className="container flex flex-1 w-full py-12 gap-6">
					<Sidebar />

					<main className="flex-1">
						<ProductsCatalog />
					</main>
				</div>
			</Suspense>
		</HydrationBoundary>
	)
}

export default HomePage
