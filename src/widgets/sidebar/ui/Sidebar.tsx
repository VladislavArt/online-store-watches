'use client'

import {
	BrandFilter,
	ButtonReset,
	CaseShape,
	FilterColor,
	FilterPrice,
	WaterResistance
} from '@/features/filter'

export function Sidebar() {
	return (
		<aside className="sidebar-container">
			<div>
				<h2 className="text-3xl font-medium border-b border-secondary/70 pb-5">
					FILTERS
				</h2>
				<BrandFilter />
				<FilterColor />
				<CaseShape />
				<WaterResistance />
				<FilterPrice />
				<ButtonReset />
			</div>
		</aside>
	)
}
