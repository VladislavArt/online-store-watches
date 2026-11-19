import { useStore } from 'zustand'
import { cartStore } from '../model/cart.store'

export function CartHeader() {
  const setIsOpen = useStore(cartStore, state => state.setIsOpen)
  return (
    <>
      <div className="flex items-center gap-3">
        <h2 className="text-lg tracking-wide text-surface">Корзина</h2>
      </div>

      <button
        type="button"
        onClick={setIsOpen}
        className="group relative p-2 -mr-2 text-zinc-400 hover:text-amber-500 hover:bg-background/40 active:scale-95 rounded-lg transition-all duration-200 outline-none"
        aria-label="Закрыть корзину"
      >
        <svg
          className="h-5 w-5 transform group-hover:rotate-90 transition-transform duration-300 cursor-pointer"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="1.8"
            d="M6 18L18 6M6 6l12 12"
          />
        </svg>
      </button>
    </>
  )
}
