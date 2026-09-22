export function ProductDetailsSkeleton() {
	return (
		<div className="container mx-auto py-8 animate-pulse select-none">
			
			<div className="h-3 bg-secondary/10 rounded w-48 mb-8"></div>

			<div className="flex flex-col md:flex-row gap-12 lg:gap-16">
				
				<div className="w-full md:w-1/2 aspect-square bg-secondary/5 border border-secondary/10 rounded-sm"></div>

				<div className="w-full md:w-1/2 flex flex-col justify-center">
					
					<div className="h-3 bg-secondary/10 rounded w-16 mb-4"></div>

					<div className="h-8 bg-secondary/10 rounded w-3/4 mb-3"></div>
					<div className="h-8 bg-secondary/10 rounded w-1/2 mb-4"></div>

					<div className="h-6 bg-secondary/10 rounded w-24 mb-6"></div>

					<hr className="border-secondary/10 mb-8" />

					<div className="flex flex-col gap-4 mb-10">
						<div className="h-4 bg-secondary/10 rounded w-full"></div>
						<div className="h-4 bg-secondary/10 rounded w-full"></div>
						<div className="h-4 bg-secondary/10 rounded w-2/3"></div>
					</div>

					<div className="w-full h-12 bg-secondary/10 rounded-sm"></div>
					
				</div>
			</div>
		</div>
	)
}
