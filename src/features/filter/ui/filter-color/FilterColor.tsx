import { WATCH_COLORS } from '@/shared/config/filters'
import Image from 'next/image'
import { useState } from 'react'
import { ColorCheckbox } from './ColorCheckbox'

export function FilterColor() {
	const [isOpen, setIsOpen] = useState(true)

	return (
		<section className="mt-8 border-t pt-4 border-secondary/70">
			<button
				onClick={() => setIsOpen(!isOpen)}
				className="flex items-center justify-between w-full text-left outline-none cursor-pointer group select-none"
			>
				<h3 className="font-medium text-primary uppercase tracking-wider">COLOR</h3>

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
				<div className="flex flex-wrap gap-4 pt-5">
					{WATCH_COLORS.map(color => {
						return (
							<ColorCheckbox
								key={color.id}
								color={color}
							/>
						)
					})}
				</div>
			)}		
		</section>
	)
}
