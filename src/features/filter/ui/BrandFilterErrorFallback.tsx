export function BrandFilterErrorFallback() {
	return (
		<div className="py-4 text-left">
			<span className="text-xs text-red-500 font-main block mb-1">
				Не удалось загрузить бренды
			</span>
			<button
				onClick={() => window.location.reload()}
				className="text-[10px] uppercase tracking-wider font-semibold underline hover:text-accent cursor-pointer transition-colors"
			>
				Обновить страницу
			</button>
		</div>
	)
}
