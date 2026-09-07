import z from 'zod'

export const ProductSchema = z.object({
	id: z.union([z.string(), z.number().transform(val => String(val))]),
	title: z.string(),
	price: z.union([z.number(), z.string().transform(val => Number(val))]),
	brandId: z.union([z.string(), z.number().transform(val => String(val))]),
	waterResistance: z.boolean(),
	caseShape: z.enum(['round', 'square', 'rectangular', 'octagonal']),
	color: z.enum(['black', 'blue', 'silver', 'gold', 'green', 'grey']),
	image: z.string()
})

export type TProduct = z.infer<typeof ProductSchema>

export const ProductQuerySchema = z.object({
	brandId: z
		.array(z.string())
		.optional()
		.transform(arr => (arr && arr.length > 0 ? arr : undefined)),
	caseShape: z
		.array(z.string())
		.optional()
		.transform(arr => (arr && arr.length > 0 ? arr : undefined)),
	color: z
		.array(z.string())
		.optional()
		.transform(arr => (arr && arr.length > 0 ? arr : undefined)),

	price_gte: z.coerce
		.number()
		.optional()
		.transform(val => val || undefined),
	price_lte: z.coerce
		.number()
		.optional()
		.transform(val => val || undefined),

	waterResistance: z
		.string()
		.optional()
		.transform(val =>
			val === 'true' ? true : val === 'false' ? false : undefined
		)
})

export type ProductQueryParams = z.infer<typeof ProductQuerySchema>

export const BrandSchema = z.object({
	id: z.union([z.string(), z.number().transform(val => String(val))]),
	name: z.string(),
	slug: z.string()
})

export type TBrand = z.infer<typeof BrandSchema>

type TColorId = z.infer<typeof ProductSchema>['color']

export interface IWatchColorFilter {
	id: TColorId
	name: string
	hex: string
}
