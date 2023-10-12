'use client'

import { FunctionComponent } from 'react'
import { useRouter, usePathname } from 'next/navigation'

import styles from './Header.module.scss'

const navItems = ['books', 'audiobooks', 'Stationery & gifts', 'blog']

const Header: FunctionComponent = () => {
	const { push } = useRouter()
	const pathname = usePathname()

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

					<div className={styles.panel}>
						<button>
							<img src='/user.svg' alt='user' />
						</button>
						<button onClick={() => push('/pages/shopping-cart')}>
							<img src='/shop-bag.svg' alt='shop-bag' />
						</button>
					</div>
				</div>
			</div>
		</header>
	)
}

export default Header
