export const CASE_SHAPES = [
	{ id: 'round', name: 'Round' },
	{ id: 'square', name: 'Square' },
	{ id: 'rectangular', name: 'Rectangular' },
	{ id: 'octagonal', name: 'Octagonal' }
] as const

export const WATCH_COLORS = [
	{ id: 'black', name: 'Black', hex: '#000000' },
	{ id: 'blue', name: 'Blue', hex: '#0000FF' },
	{ id: 'silver', name: 'Silver', hex: '#C0C0C0' },
	{ id: 'gold', name: 'Gold', hex: '#FFD700' },
	{ id: 'green', name: 'Green', hex: '#008000' },
	{ id: 'grey', name: 'Grey', hex: '#808080' }
] as const

export const INPUT_CONFIGS = [
	{ id: 'min', placeholder: 'FROM, $' },
	{ id: 'max', placeholder: 'TO, $' }
] as const

export const RESISTANCE = [
	{ id: 'true', name: 'YES' },
	{ id: 'false', name: 'NO' },
	{ id: 'all', name: "Doesn't matter" }
] as const

export const MAX_PRICE = 2000
