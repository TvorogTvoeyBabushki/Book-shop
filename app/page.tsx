import { NextPage } from 'next'
import clsx from 'clsx'

import Layout from './components/layout/Layout'
import Slider from './components/ui/slider/Slider'
import styles from './styles/Home.module.scss'

interface IPromoElsProps {
	title: string
	variant: string
}

const promoEls: IPromoElsProps[] = [
	{ title: 'Change old book on new', variant: 'purple_light-block' },
	{ title: 'top 100 books 2022', variant: 'pink-block' }
]

const Home: NextPage = () => {
	return (
		<Layout>
			<main>
				<div className='container'>
					<section className={styles.slider_wrapper}>
						<Slider />
						{promoEls.map(promo => (
							<a key={promo.variant} href='#'>
								<div
									className={clsx(styles.promo, {
										[styles.purple_light]:
											promo.variant === 'purple_light-block',
										[styles.pink]: promo.variant === 'pink-block'
									})}
								>
									<p>{promo.title}</p>
									<img src='/arrow-long.svg' alt='arrow' />
								</div>
							</a>
						))}
					</section>
				</div>
			</main>
		</Layout>
	)
}

export default Home
