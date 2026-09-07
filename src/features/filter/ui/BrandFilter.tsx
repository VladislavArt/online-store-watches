import useUpdateParams from '@/shared/lib/hooks/useUpdateParams'
import useActiveFiltersKey from '../lib/useActiveFiltersKey'
import useBrandFilter from '../lib/useBrandFilter'

export function BrandFilter() {
	const { brands, isLoading, isError } = useBrandFilter()
	const { updateParams } = useUpdateParams()
	const { selectedBrandId } = useActiveFiltersKey()

	if (isLoading) {
		return (
			<div className="text-sm text-secondary font-main">
				Загрузка брендов...
			</div>
		)
	}

	if (isError || !brands) {
		return (
			<div className="text-sm text-red-500 font-main">
				Ошибка загрузки брендов
			</div>
		)
	}

	return (
		<section
			className={'pt-4 transition-opacity duration-200'}>
			<h3 className="font-medium">BRAND</h3>
			<div className="pt-5 flex flex-col gap-5">
				{brands.map(brand => {
					return (
						<label
							key={brand.id}
							htmlFor={brand.id}
							className="flex items-center gap-3 cursor-pointer select-none hover:text-accent transition-colors duration-200"
						>
							<input
								id={brand.id}
								name="brands"
								className="w-4 h-4 border-primary accent-primary cursor-pointer transition-all duration-200"
								type="checkbox"
								value={brand.id}
								checked={selectedBrandId.includes(brand.id)}
								onChange={() => updateParams('brandId', brand.id)}
							/>
							<span>{brand.name}</span>
						</label>
					)
				})}
			</div>
		</section>
	)
}
