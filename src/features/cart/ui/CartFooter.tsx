'use client'

import Link from 'next/link'
import { useStore } from 'zustand'
import { cartStore } from '../model/cart.store'

export function CartFooter() {
  const totalCount = useStore(cartStore, state => state.totalCount)
  const totalAmount = useStore(cartStore, state => state.totalAmount)
  const toggleCart = useStore(cartStore, state => state.setIsOpen)

  if (totalCount === 0) return null

  return (
    <footer className="border-t border-secondary/30 bg-primary px-5 py-5 sm:px-6 space-y-4">
      <div className="space-y-1.5">
        <div className="flex items-center justify-between text-xs text-secondary">
          <span>Товары ({totalCount} шт.)</span>
          <span className="text-surface/90 font-medium">
            Бесплатная доставка
          </span>
        </div>

        <div className="flex items-baseline justify-between pt-1">
          <span className="text-sm font-medium text-surface">Итого</span>
          <span className="text-lg font-bold text-surface font-mono whitespace-nowrap">
            {`${totalAmount.toLocaleString('ru-RU', {
              minimumFractionDigits: 2,
              maximumFractionDigits: 2
            })} ₽`}
          </span>
        </div>
      </div>

      <Link
        href="/order"
        onClick={toggleCart}
        className="flex items-center justify-center w-full rounded-lg bg-accent px-4 py-3 text-sm font-medium text-surface hover:bg-accent/90 active:scale-[0.99] transition-all shadow-md"
      >
        Перейти к оформлению
      </Link>

      <p className="text-[11px] leading-relaxed text-center text-secondary/70">
        Нажимая на кнопку, вы соглашаетесь с{' '}
        <Link
          href="/privacy"
          onClick={toggleCart}
          className="underline hover:text-accent transition-colors"
        >
          политикой конфиденциальности
        </Link>{' '}
        и условиями оферты
      </p>
    </footer>
  )
}
