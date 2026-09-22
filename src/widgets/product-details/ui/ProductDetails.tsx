'use client'

import { AddToCartButton } from '@/features/cart'
import type { TProductId } from '@/shared/types/filter.types'
import { skipToken } from '@tanstack/react-query'
import Image from 'next/image'
import Link from 'next/link'
import { useParams } from 'next/navigation'
import { useGetProduct } from '../lib/useGetProduct'

export function ProductDetails() {
	const { id } = useParams() as { id: TProductId }

	const { data: product } = useGetProduct(id ?? skipToken)

	return (
		<div className="container mx-auto py-8 font-main text-primary select-none">
			<nav className="flex items-center gap-2 text-xs text-secondary/60 tracking-wider uppercase mb-8">
				<Link
					href="/"
					className="hover:text-accent transition-colors duration-200"
				>
					Каталог
				</Link>
				<span>/</span>
				<span className="text-secondary/40">Часы</span>
				<span>/</span>
				<span className="text-primary/80 truncate max-w-50">
					{product.title}
				</span>
			</nav>

			<div className="flex flex-col md:flex-row gap-12 lg:gap-16">
				<div className="w-full md:w-1/2 aspect-square bg-secondary/5 border border-secondary/10 flex items-center justify-center p-12 overflow-hidden relative group">
					<Image
						src={product.image}
						alt={product.title}
						width={450}
						height={450}
						className="object-contain w-auto h-auto max-h-full transition-transform duration-700 ease-out group-hover:scale-105"
						priority
					/>
				</div>

				<div className="w-full md:w-1/2 flex flex-col justify-center">
					<span className="text-xs uppercase tracking-widest text-secondary font-mono mb-3">
						REF. #{product.id}
					</span>

					<h1 className="text-3xl lg:text-4xl font-headline font-light tracking-wide text-primary leading-tight mb-4">
						{product.title}
					</h1>

					<div className="font-headline text-2xl lg:text-3xl font-medium text-accent tracking-wide mb-6">
						$
						{product.price.toLocaleString('en-US', {
							minimumFractionDigits: 2
						})}
					</div>

					<hr className="border-secondary/10 mb-8" />

					<div className="grid grid-cols-1 sm:grid-cols-2 gap-y-4 gap-x-12 text-sm mb-10">
						<div className="flex justify-between border-b border-secondary/5 pb-2">
							<span className="text-secondary/60">Водонепроницаемость</span>
							<span className="font-medium">
								{product.waterResistance ? '100 м (10 ATM)' : '30 м (3 ATM)'}
							</span>
						</div>

						<div className="flex justify-between border-b border-secondary/5 pb-2">
							<span className="text-secondary/60">Форма корпуса</span>
							<span className="font-medium uppercase tracking-wider">
								{product.caseShape || 'Круг'}
							</span>
						</div>

						<div className="flex justify-between border-b border-secondary/5 pb-2">
							<span className="text-secondary/60">Цвет циферблата</span>
							<span className="font-medium capitalize">
								{product.color || 'Стальной'}
							</span>
						</div>

						<div className="flex justify-between border-b border-secondary/5 pb-2">
							<span className="text-secondary/60">Материал</span>
							<span className="font-medium">Нержавеющая сталь</span>
						</div>
					</div>

					<div className="w-full">
						<AddToCartButton product={product} />
					</div>
				</div>
			</div>
		</div>
	)
}
