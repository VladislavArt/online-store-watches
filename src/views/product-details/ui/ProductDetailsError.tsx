import Link from 'next/link'

export function ProductDetailsError({
	resetErrorBoundary
}: {
	resetErrorBoundary: () => void
}) {
	return (
		<div className="flex flex-col items-center justify-center py-16 text-center">
			<h2 className="font-headline text-2xl font-light text-primary mb-4">
				Часы не найдены
			</h2>
			<p className="font-main text-secondary text-sm mb-8 max-w-md">
				Произошла ошибка при получении данных о товаре. Возможно, ссылка
				устарела или сервер временно недоступен.
			</p>
			<div className="flex gap-4">
				<button
					onClick={resetErrorBoundary}
					className="px-6 py-3 border border-primary uppercase text-xs tracking-widest font-semibold hover:bg-primary hover:text-white transition-all duration-300 cursor-pointer"
				>
					Попробовать снова
				</button>
				<Link
					href="/"
					className="px-6 py-3 bg-secondary/5 text-primary uppercase text-xs tracking-widest font-semibold hover:bg-secondary/10 transition-all duration-300"
				>
					В каталог
				</Link>
			</div>
		</div>
	)
}
