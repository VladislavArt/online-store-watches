import useUpdateParams from '@/shared/lib/hooks/useUpdateParams'
import Image from 'next/image'
import { useState } from 'react'
import useActiveFiltersKey from '../lib/useActiveFiltersKey'
import useBrandFilter from '../lib/useBrandFilter'

export function BrandFilter() {
	const { brands, isLoading, isError } = useBrandFilter()
	const { updateParams } = useUpdateParams()
	const { selectedBrandId } = useActiveFiltersKey()
	
	const [isOpen, setIsOpen] = useState(true)

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
		<section className={'pt-4 transition-opacity duration-200'}>
			<button
				onClick={() => setIsOpen(!isOpen)}
				className="flex items-center justify-between w-full text-left outline-none cursor-pointer group select-none"
			>
				<h3 className="font-medium">BRAND</h3>

				<Image
					src="/arrow_down.svg"
					alt="arrow"
					width={12}
					height={12}
					className={`opacity-60 group-hover:opacity-100 transition-all duration-300 ease-in-out ${
						isOpen ? 'rotate-0' : '-rotate-90'
					}`}
				/>
			</button>
			{isOpen && (
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
			)}
		</section>
	)
}
