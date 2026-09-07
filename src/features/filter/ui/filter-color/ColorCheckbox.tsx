import type { IWatchColorFilter } from '@/shared/types/filter.types'
import useActiveFiltersKey from '../../lib/useActiveFiltersKey'
import useUpdateParams from '@/shared/lib/hooks/useUpdateParams'

interface Props {
	color: IWatchColorFilter
}

export function ColorCheckbox({ color }: Props) {
	const { updateParams } = useUpdateParams()
	const { selectedColorId } = useActiveFiltersKey()

	return (
		<label 
			className="relative cursor-pointer select-none group"
			title={color.name}
		>
			<input
				type="checkbox"
				className="peer sr-only"
				value={color.id}
				checked={selectedColorId.includes(color.id)}
				onChange={() => {updateParams('colorId', color.id)}}
			/>

			<span
				style={{ backgroundColor: color.hex }}
				className={`
					block w-6 h-6 rounded-full border border-black/10
					transition-all duration-200 ease-in-out

					group-hover:scale-110
					
					peer-checked:ring-2 
					peer-checked:ring-primary 
					peer-checked:ring-offset-2

					${color.id === 'silver' ? 'border-secondary/70' : ''}
				`}
			/>
		</label>
	)
}

