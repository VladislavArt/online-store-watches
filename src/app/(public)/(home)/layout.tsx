import { Header } from '@/widgets/header'
import type { PropsWithChildren } from 'react'

function Layout({ children }: PropsWithChildren<unknown>) {
	return (
		<div className='flex min-h-screen flex-col'>
			<Header />
			<main className='flex flex-1 flex-col'>
				{children}
			</main>
		</div>
	)
}

export default Layout
