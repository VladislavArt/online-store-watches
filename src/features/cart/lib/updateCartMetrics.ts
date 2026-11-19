import type { TProduct } from '@/shared/types/product.types'

type TCartProduct = TProduct & { quantity: number }

interface MetricsState {
  items: TCartProduct[]
  totalCount: number
  totalAmount: number
}

export const updateCartMetrics = (state: MetricsState): void => {
  state.totalCount = state.items.reduce((sum, i) => sum + i.quantity, 0)
  state.totalAmount = state.items.reduce(
    (sum, i) => sum + i.price * i.quantity,
    0
  )
}
