import { RESISTANCE } from '@/shared/config/filters'
import useUpdateParams from '@/shared/lib/hooks/useUpdateParams'
import Image from 'next/image'
import { useState } from 'react'
import useActiveFiltersKey from '../lib/useActiveFiltersKey'

export function WaterResistance() {
	const { updateParams } = useUpdateParams()
	const { resistance } = useActiveFiltersKey()

	const [isOpen, setIsOpen] = useState(true)

	return (
		<section className="mt-8 border-t pt-4 border-secondary/70">
			<button
				onClick={() => setIsOpen(!isOpen)}
				className="flex items-center justify-between w-full text-left outline-none cursor-pointer group select-none"
			>
				<h3 className="font-medium">WATER RESISTANCE</h3>

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
				<div className="flex flex-col gap-5 pt-5">
					{RESISTANCE.map(item => {
						return (
							<label
								key={item.id}
								className="flex items-center gap-3 cursor-pointer select-none hover:text-accent transition-colors duration-200"
							>
								<input
									className="w-4 h-4 appearance-none rounded-full border border-primary p-0.5 bg-clip-content checked:bg-primary cursor-pointer transition-all duration-200"
									type="radio"
									name="water-resistance"
									value={item.id}
									checked={resistance === item.id}
									onChange={() => updateParams('waterResistance', item.id)}
								/>
								<span>{item.name}</span>
							</label>
						)
					})}
				</div>
			)}
		</section>
	)
}
