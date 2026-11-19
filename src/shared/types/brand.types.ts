import z from 'zod'

export const BrandSchema = z.object({
	id: z.union([z.string(), z.number().transform(val => String(val))]),
	name: z.string(),
	slug: z.string()
})

export type TBrand = z.infer<typeof BrandSchema>
