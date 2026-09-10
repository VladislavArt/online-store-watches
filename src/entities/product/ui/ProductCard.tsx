import type { TProduct } from '@/shared/types/filter.types'
import Image from 'next/image'
import Link from 'next/link'

export function ProductCard({ product, index }: { product: TProduct; index: number }) {
	return (
		<article className="flex flex-col select-none w-full h-full">
			<Link
				href={'#'}
				className="group relative w-full aspect-square bg-secondary/5 border border-secondary/10 overflow-hidden flex items-center justify-center p-8 outline-none focus-visible:ring-2 focus-visible:ring-primary hover:shadow-md hover:border-primary/20 transition-all duration-300"
			>
				<Image
					src={product.image}
					alt={product.title}
					width={220}
					height={220}
					className="object-contain w-auto h-auto max-h-full group-hover:scale-105 transition-transform duration-500 ease-out"
					priority={index < 4}
				/>
			</Link>

			<div className="flex flex-col pt-4 px-1">
				<h3 className="font-headline text-base font-light text-primary tracking-wide line-clamp-1">
					<Link
						href={'#'}
						className='hover:text-accent transition-colors duration-200 outline-none focus-visible:underline'
					>
						{product.title}
					</Link>
				</h3>
			</div>

			<div className="flex flex-col mt-auto pt-2">
				<span className="font-headline text-lg font-medium text-primary">
					${product.price.toLocaleString('ru-RU', { minimumFractionDigits: 2 })}
				</span>

				<button type='button' className="mt-3 w-1/2 self-center py-2.5 border border-primary text-primary bg-transparent font-headline font-semibold text-[11px] uppercase tracking-wider text-center hover:bg-primary hover:text-background active:scale-[0.95] transition-all duration-300 outline-none cursor-pointer">
					Add To Cart
				</button>
			</div>
		</article>
	)
}
