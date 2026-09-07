import Link from 'next/link'
import { MENU_PAGES } from '../model/menu.config'

export function Navigation() {
	return (
		<nav className="text-2xl pl-10 flex gap-28">
			{MENU_PAGES.map(item => (
				<Link
					key={item.name}
					href={item.href}
					className="hover:text-accent"
				>
					{item.name}
				</Link>
			))}
		</nav>
	)
}
