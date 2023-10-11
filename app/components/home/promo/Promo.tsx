import { FunctionComponent } from 'react'
import clsx from 'clsx'

import styles from './Promo.module.scss'

interface IPromoElsProps {
	title: string
	variant: string
}

const promoEls: IPromoElsProps[] = [
	{ title: 'Change old book on new', variant: 'purple_light-block' },
	{ title: 'top 100 books 2022', variant: 'pink-block' }
]

const Promo: FunctionComponent = () => {
	return (
		<>
			{promoEls.map(promo => (
				<a key={promo.variant} href='#'>
					<div
						className={clsx(styles.promo, {
							[styles.purple_light]: promo.variant === 'purple_light-block',
							[styles.pink]: promo.variant === 'pink-block'
						})}
					>
						<p>{promo.title}</p>
						<img src='/arrow-long.svg' alt='arrow' />
					</div>
				</a>
			))}
		</>
	)
}

export default Promo
