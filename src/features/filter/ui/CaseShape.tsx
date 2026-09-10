import { CASE_SHAPES } from '@/shared/config/filters'
import useUpdateParams from '@/shared/lib/hooks/useUpdateParams'
import Image from 'next/image'
import { useState } from 'react'
import useActiveFiltersKey from '../lib/useActiveFiltersKey'

export function CaseShape() {
	const { updateParams } = useUpdateParams()
	const { selectedCaseShape } = useActiveFiltersKey()

	const [isOpen, setIsOpen] = useState(true)

	return (
		<section
			className={
				'mt-8 border-t pt-4 border-secondary/70 transition-opacity duration-200'
			}
		>
			<button
				onClick={() => setIsOpen(!isOpen)}
				className="flex items-center justify-between w-full text-left outline-none cursor-pointer group select-none"
			>
				<h3 className="font-medium">CASE SHAPE</h3>

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
					{CASE_SHAPES.map(item => {
						return (
							<label
								key={item.id}
								className="flex items-center gap-3 cursor-pointer select-none hover:text-accent transition-colors duration-200"
							>
								<input
									className="w-4 h-4 border-primary accent-primary cursor-pointer transition-all duration-200"
									type="checkbox"
									value={item.id}
									checked={selectedCaseShape.includes(item.id)}
									onChange={() => updateParams('caseShape', item.id)}
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
