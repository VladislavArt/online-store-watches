import Slider from 'rc-slider'
import useUpdateParams from '@/shared/lib/hooks/useUpdateParams'
import { MAX_PRICE } from '@/shared/config/filters'
import useRangeSlider from '../../lib/useRangeSlider'

export function RangeSlider() {
	const { updateRangeParams } = useUpdateParams()
	const { localValue, setLocalValue } = useRangeSlider()

	return (
		<Slider
			range
			className="mt-4"
			value={localValue}
			min={0}
			max={MAX_PRICE}
			onChange={values => setLocalValue(values as [number, number])}
			onChangeComplete={(values) => {
				const [ min, max ] = values as [number, number]
				updateRangeParams(min, max)
			}}
			styles={{
				track: {
					backgroundColor: '#000000',
					height: 1
				},

				rail: {
					backgroundColor: '#E5E7EB',
					height: 1
				},

				handle: {
					borderColor: '#000000',
					backgroundColor: '#000000',
					width: 14,
					height: 14,
					marginTop: -6,
					opacity: 1,
					boxShadow: 'none',
					cursor: 'pointer'
				}
			}}
		/>
	)
}
