import z from 'zod'
import type { ProductSchema } from './product.types'

type TColorId = z.infer<typeof ProductSchema>['color']

export interface IWatchColorFilter {
	id: TColorId
	name: string
	hex: string
}
