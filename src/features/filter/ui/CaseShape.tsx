import { CASE_SHAPES } from '@/shared/config/filters'
import useUpdateParams from '@/shared/lib/hooks/useUpdateParams'
import useActiveFiltersKey from '../lib/useActiveFiltersKey'

export function CaseShape() {
	const { updateParams } = useUpdateParams()
	const { selectedCaseShape } = useActiveFiltersKey()
	
	return (
		<section className={'mt-8 border-t pt-4 border-secondary/70 transition-opacity duration-200'}>
			<h3 className="font-medium">CASE SHAPE</h3>
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
		</section>
	)
}
