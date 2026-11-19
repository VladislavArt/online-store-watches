'use client'

import type { TProduct } from '@/shared/types/product.types'
import Image from 'next/image'
import { useStore } from 'zustand'
import { cartStore } from '../model/cart.store'

interface Props {
  item: TProduct & { quantity: number }
}

export function CartItem({ item }: Props) {
  const increase = useStore(cartStore, state => state.setIncreaseItem)
  const decrease = useStore(cartStore, state => state.setDecreaseItem)
  const deleteItem = useStore(cartStore, state => state.setDeleteItem)

  return (
    <li className="flex py-5 transition-all duration-200 hover:bg-background/20 rounded-xl px-3 group/item border-b border-secondary/40 last:border-0">
      <div className="h-20 w-20 shrink-0 overflow-hidden rounded-lg border border-secondary/70 bg-background flex items-center justify-center p-2 relative">
        <Image
          src={item.image}
          alt={item.title}
          width={80}
          height={80}
          className="object-contain max-h-full w-auto h-auto transition-transform duration-500 group-hover/item:scale-105"
        />
      </div>

      <div className="ml-4 flex flex-1 flex-col justify-between">
        <div>
          <div className="flex justify-between items-start gap-2">
            <h3 className="font-medium text-sm text-surface line-clamp-2 hover:text-amber-500 transition-colors cursor-pointer leading-snug">
              {item.title}
            </h3>

            <p className="text-sm font-semibold text-surface font-mono whitespace-nowrap">
              {`${(item.price * item.quantity).toLocaleString('ru-RU', {
                minimumFractionDigits: 2,
                maximumFractionDigits: 2
              })} ₽`}
            </p>
          </div>
        </div>

        <div className="flex items-center justify-between pt-2">
          <div className="flex items-center border border-secondary/70 rounded-md bg-background overflow-hidden h-7">
            <button
              type="button"
              onClick={() => decrease(item)}
              className="px-2.5 py-1 text-xs text-secondary/60 hover:text-primary hover:bg-surface active:scale-90 transition-all outline-none cursor-pointer"
              title="Уменьшить"
            >
              -
            </button>
            <span className="px-2 text-xs font-bold font-mono text-primary min-w-7 text-center select-none">
              {item.quantity}
            </span>
            <button
              type="button"
              onClick={() => increase(item)}
              className="px-2.5 py-1 text-xs text-secondary/60 hover:text-primary hover:bg-surface active:scale-90 transition-all outline-none cursor-pointer"
              title="Увеличить"
            >
              +
            </button>
          </div>

          <button
            type="button"
            onClick={() => deleteItem(item)}
            className="text-xs text-secondary/50 hover:text-red-400 transition-colors py-1 px-2 rounded-md hover:bg-red-500/5 outline-none cursor-pointer"
          >
            Удалить
          </button>
        </div>
      </div>
    </li>
  )
}
