import { PriceInput } from './PriceInput'
import { RangeSlider } from './RangeSlider'

export function FilterPrice() {
	return (
		<section className="mt-8 border-t pt-4 border-secondary/70">
			<h3 className="font-medium">PRICE</h3>
			<RangeSlider />
			<PriceInput />
		</section>
	)
}
