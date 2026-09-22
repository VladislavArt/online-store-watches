'use client'

import {
	BrandFilter,
	BrandFilterErrorFallback,
	ButtonReset,
	CaseShape,
	FilterColor,
	FilterPrice,
	WaterResistance
} from '@/features/filter'
import { ErrorBoundary } from 'react-error-boundary'

export function Sidebar() {
	return (
		<aside className="sidebar-container">
			<div>
				<h2 className="text-3xl font-medium border-b border-secondary/70 pb-5">
					FILTERS
				</h2>

				<ErrorBoundary FallbackComponent={BrandFilterErrorFallback}>
					<BrandFilter />
				</ErrorBoundary>

				<FilterColor />
				<CaseShape />
				<WaterResistance />
				<FilterPrice />
				<ButtonReset />
			</div>
		</aside>
	)
}
