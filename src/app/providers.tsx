'use client'

import React from 'react'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { ReactQueryDevtools } from '@tanstack/react-query-devtools'

function Providers ({ children }: {children: React.ReactNode}) {
	const [queryClient] = React.useState(
		() => new QueryClient({
			defaultOptions: {
				queries: {
					staleTime: 1000 * 60 * 5,
					refetchOnWindowFocus: false
				}
			}
		})
	)

	return (
		<QueryClientProvider client={queryClient}>
			{children}
			<ReactQueryDevtools initialIsOpen={false} buttonPosition="bottom-right" />
		</QueryClientProvider>
	)
}

export default Providers
