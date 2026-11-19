import type { TProduct } from '@/shared/types/product.types'
import { persist } from 'zustand/middleware'
import { immer } from 'zustand/middleware/immer'
import { createStore } from 'zustand/vanilla'
import { updateCartMetrics } from '../lib/updateCartMetrics'

type TCartProduct = TProduct & { quantity: number }

type CartStoreState = {
  isOpen: boolean
  items: TCartProduct[]
  totalCount: number
  totalAmount: number
  setIsOpen: () => void
  setAddItemsToCart: (item: TProduct) => void
  setIncreaseItem: (item: TCartProduct) => void
  setDecreaseItem: (item: TCartProduct) => void
  setDeleteItem: (item: TCartProduct) => void
}

type CartStore = CartStoreState

export const cartStore = createStore<CartStore>()(
  persist(
    immer(set => ({
      isOpen: false,
      items: [],
      totalCount: 0,
      totalAmount: 0,
      setIsOpen: () =>
        set(state => {
          state.isOpen = !state.isOpen
        }),
      setAddItemsToCart: item => {
        set(state => {
          const product = state.items.find(i => i.id === item.id)

          if (product) {
            product.quantity++
          } else {
            state.items.push({ ...item, quantity: 1 })
          }

          updateCartMetrics(state)
        })
      },
      setIncreaseItem: item => {
        set(state => {
          const product = state.items.find(i => i.id === item.id)
          if (product) product.quantity++
          updateCartMetrics(state)
        })
      },
      setDecreaseItem: item => {
        set(state => {
          const index = state.items.findIndex(i => i.id === item.id)
          if (index === -1) return

          const product = state.items[index]

          if (product.quantity === 1) {
            state.items.splice(index, 1)
          } else {
            product.quantity--
          }

          updateCartMetrics(state)
        })
      },
      setDeleteItem: item => {
        set(state => {
          const index = state.items.findIndex(i => i.id === item.id)

          if (index !== -1) state.items.splice(index, 1)

          updateCartMetrics(state)
        })
      }
    })),
    {
      name: 'cart'
    }
  )
)
