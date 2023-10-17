'use client'

import { FunctionComponent } from 'react'
import { useRouter, usePathname } from 'next/navigation'

import HeaderPanel from './panel/HeaderPanel'
import styles from './Header.module.scss'

const navItems = ['books', 'audiobooks', 'Stationery & gifts', 'blog']

const Header: FunctionComponent = () => {
	const pathname = usePathname()
	const { push } = useRouter()

	const handleLinkHome = () => {
		if (pathname !== '/') {
			push('/')
		}
	}

	return (
		<header className={styles.header}>
			<div className='container'>
				<div className={styles.wrapper}>
					<h1 onClick={handleLinkHome} className={styles.logo}>
						Bookshop
					</h1>

					<nav className={styles.nav}>
						<ul>
							{navItems.map(navItem => (
								<li key={navItem}>
									<a href='#'>{navItem}</a>
								</li>
							))}
						</ul>
					</nav>

					<HeaderPanel />
				</div>
			</div>
		</header>
	)
}

export default Header
