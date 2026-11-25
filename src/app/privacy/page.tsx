import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Политика конфиденциальности | WATCH-SHOP',
  description:
    'Условия обработки персональных данных и правила использования сервиса WATCH-SHOP'
}

export default function PrivacyPage() {
  return (
    <div className="container py-12 max-w-4xl">
      <Link
        href="/"
        className="inline-flex items-center text-sm text-secondary hover:text-accent transition-colors mb-6"
      >
        ← Вернуться в каталог
      </Link>

      <article className="space-y-6 text-primary">
        <header className="border-b border-secondary/30 pb-6">
          <h1 className="text-3xl font-bold font-headline">
            Политика конфиденциальности и условия оферты
          </h1>
          <p className="text-sm text-secondary mt-2">
            Последнее обновление: Ноябрь 2026 г.
          </p>
        </header>

        <section className="space-y-3 text-sm leading-relaxed text-primary/90">
          <h2 className="text-lg font-semibold text-primary">
            1. Общие положения
          </h2>
          <p>
            Настоящая Политика конфиденциальности регулирует порядок обработки и
            защиты персональных данных пользователей интернет-магазина наручных
            часов WATCH-SHOP. Проект носит демонстрационный характер.
          </p>
        </section>

        <section className="space-y-3 text-sm leading-relaxed text-primary/90">
          <h2 className="text-lg font-semibold text-primary">
            2. Какие данные мы собираем
          </h2>
          <p>
            При оформлении заказа пользователь добровольно предоставляет имя,
            контактный номер телефона, адрес электронной почты и адрес доставки.
            Также для сохранения товаров в корзине используется локальное
            хранилище браузера (localStorage).
          </p>
        </section>

        <section className="space-y-3 text-sm leading-relaxed text-primary/90">
          <h2 className="text-lg font-semibold text-primary">
            3. Цели обработки данных
          </h2>
          <ul className="list-disc pl-5 space-y-1.5">
            <li>Оформление, подтверждение и доставка заказов;</li>
            <li>Обратная связь с покупателем по вопросам статуса заказа;</li>
            <li>Улучшение работы интерфейса и пользовательского опыта.</li>
          </ul>
        </section>

        <section className="space-y-3 text-sm leading-relaxed text-primary/90">
          <h2 className="text-lg font-semibold text-primary">
            4. Условия оферты и возврата
          </h2>
          <p>
            Все представленные на сайте модели часов носят ознакомительный
            характер. Оформление заказа на сайте не влечёт за собой реального
            списания денежных средств.
          </p>
        </section>
      </article>
    </div>
  )
}
