'use client'

import { FunctionComponent, useEffect, useRef, useState } from 'react'
import { useRouter, usePathname } from 'next/navigation'

import Auth from '@/components/ui/auth/Auth'

import styles from './Header.module.scss'

const navItems = ['books', 'audiobooks', 'Stationery & gifts', 'blog']

const Header: FunctionComponent = () => {
	const [isShowAuth, setIsShowAuth] = useState<boolean>(false)
	const { push } = useRouter()
	const pathname = usePathname()
	const authRef = useRef<HTMLDivElement | null>(null)

	const handleLinkHome = () => {
		if (pathname !== '/') {
			push('/')
		}
	}

	useEffect(() => {
		document.addEventListener('click', e => {
			if (!authRef.current?.contains(e.target as Node)) {
				setIsShowAuth(false)
			}
		})

		return () =>
			document.removeEventListener('click', e => {
				if (!authRef.current?.contains(e.target as Node)) {
					setIsShowAuth(false)
				}
			})
	}, [])

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
						<div ref={authRef} className={styles.auth}>
							<button
								onClick={() =>
									!isShowAuth ? setIsShowAuth(true) : setIsShowAuth(false)
								}
							>
								<img className='auth__img' src='/user.svg' alt='user' />
							</button>
							{isShowAuth && <Auth title='Log in' />}
						</div>

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
