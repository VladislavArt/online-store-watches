// 'use client'

// import { createContext, useContext, useState, type ReactNode } from 'react'
// import { useStore } from 'zustand'
// import { createFilterStore, type FilterStore } from './filterStore'

// type FilterStoreApi = ReturnType<typeof createFilterStore>

// const FilterStoreContext = createContext<FilterStoreApi | undefined>(
// 	undefined
// )

// interface FilterStoreProviderProps {
// 	children: ReactNode
// }

// export const FilterStoreProvider = ({ children }: FilterStoreProviderProps) => {
// 	const [store] = useState(() => createFilterStore())

// 	return (
// 		<FilterStoreContext.Provider value={store}>
// 			{children}
// 		</FilterStoreContext.Provider>
// 	)
// }

// export const useFilterStore = <T,>(selector: (store: FilterStore) => T): T => {
// 	const filterStoreContext = useContext(FilterStoreContext)

// 	if (!filterStoreContext) {
// 		throw new Error(`useFilterStore must be used within FilterStoreProvider`)
// 	}

// 	return useStore(filterStoreContext, selector)
// }
