import { getQueryClient } from '@/shared/api/get-query-client'
import { HomePageSkeleton } from '@/views/home'
import { ProductsCatalog } from '@/widgets/products-catalog'
import { Sidebar } from '@/widgets/sidebar'
import { dehydrate, HydrationBoundary } from '@tanstack/react-query'
import { Suspense } from 'react'
import { prefetchHomePage } from '../_lib/prefetchHomePage'

async function HomePage() {
  const queryClient = getQueryClient()

  await prefetchHomePage(queryClient)

  return (
    <HydrationBoundary state={dehydrate(queryClient)}>
      <Suspense fallback={<HomePageSkeleton />}>
        <div className="container flex flex-1 w-full py-12 gap-6">
          <Sidebar />

          <section
            aria-label="Каталог товаров"
            className="flex-1 min-w-0"
          >
            <ProductsCatalog />
          </section>
        </div>
      </Suspense>
    </HydrationBoundary>
  )
}

export default HomePage
