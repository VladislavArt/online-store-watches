import { WATCH_COLORS } from '@/shared/config/filters'
import { ColorCheckbox } from './ColorCheckbox'

export function FilterColor() {
	return (
		<section className="mt-8 border-t pt-4 border-secondary/70">
			<h3 className="font-medium text-primary uppercase tracking-wider">
				COLOR
			</h3>
			
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
		</section>
	)
}
