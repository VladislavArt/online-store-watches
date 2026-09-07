import { INPUT_CONFIGS } from '@/shared/config/filters'
import { NumericFormat } from 'react-number-format'
import { usePriceInputSync } from '../../lib/usePriceInputSync'
import useActiveFiltersKey from '../../lib/useActiveFiltersKey'

export function PriceInput() {
	const { inputMinPrice, inputMaxPrice } = useActiveFiltersKey()
	const { updatePriceInput } = usePriceInputSync()

	return (
		<div className="mt-4 flex items-center gap-5 w-full select-none">
			{INPUT_CONFIGS.map(config => {
				const priceValue = config.id === 'min' ? inputMinPrice : inputMaxPrice

				return (
					<NumericFormat
						key={config.id}
						id={config.id}
						value={priceValue}
						placeholder={config.placeholder}
						thousandSeparator=","
						prefix="$"
						decimalScale={0}
						allowNegative={false}
						onValueChange={updatePriceInput(config.id)}
						className="w-full p-2.5 text-base border border-secondary/70 bg-transparent text-primary outline-none focus:border-primary transition-colors font-medium"
					/>
				)
			})}
		</div>
	)
}
