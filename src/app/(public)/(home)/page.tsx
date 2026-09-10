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
			<div className="container flex flex-1 w-full py-12 gap-6">
				<Suspense
					fallback={
						<aside className="sidebar-container w-[280px] animate-pulse">
							<div className="text-sm text-secondary font-main">
								Загрузка панели фильтров...
							</div>
						</aside>
					}
				>
					<Sidebar />
					<main className="flex-1">
						<ProductsCatalog />
					</main>
				</Suspense>
			</div>
		</HydrationBoundary>
	)
}

export default HomePage
