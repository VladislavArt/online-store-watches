'use client'

import { useEffect } from 'react'
import { useStore } from 'zustand'
import { cartStore } from '../model/cart.store'
import { CartFooter } from './CartFooter'
import { CartHeader } from './CartHeader'
import { CartItem } from './CartItem'

export function CartOpen() {
  const isOpen = useStore(cartStore, state => state.isOpen)
  const items = useStore(cartStore, state => state.items)
  const toggleCart = useStore(cartStore, state => state.setIsOpen)

  useEffect(() => {
    if (!isOpen) return

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') toggleCart()
    }

    window.addEventListener('keydown', handleKeyDown)

    return () => {
      window.removeEventListener('keydown', handleKeyDown)
    }
  }, [isOpen, toggleCart])

  if (!isOpen) return null

  return (
    <aside
      aria-label="Корзина покупок"
      className="fixed inset-y-0 right-0 z-50 flex flex-col items-stretch w-full max-w-md bg-primary border-l border-secondary/70 shadow-2xl"
    >
      <div className="flex items-center justify-between border-b border-secondary/70 px-5 py-5 sm:px-6">
        <CartHeader />
      </div>

      <div className="flex-1 overflow-y-auto overflow-x-hidden px-4 py-4 space-y-4">
        {items.length === 0 ? (
          <div className="h-full flex flex-col items-center justify-center text-center p-6 select-none">
            <span className="text-4xl mb-3 opacity-60">🛒</span>
            <p className="text-sm text-surface font-medium">
              Ваша корзина пуста
            </p>
            <p className="text-xs text-secondary/60 mt-1">
              Добавьте часы из каталога
            </p>
          </div>
        ) : (
          <ul
            role="list"
            className="divide-y divide-secondary/20"
          >
            {items.map(item => (
              <CartItem
                key={item.id}
                item={item}
              />
            ))}
          </ul>
        )}
      </div>

      <CartFooter />
    </aside>
  )
}
