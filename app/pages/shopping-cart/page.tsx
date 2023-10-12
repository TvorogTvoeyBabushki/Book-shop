'use client'

import { NextPage } from 'next'

import { IBookDataProps } from '@/components/home/book-catalog/bookData'
import Button from '@/components/ui/button/Button'
import Layout from '@/components/layout/Layout'

import { currency } from '@/utils/currency'

import ShoppingCartTable from './table/ShoppingCartTable'
import { useShoppingCart } from './useShoppingCart'
import styles from './ShoppingCart.module.scss'

const bookData: IBookDataProps[] = [
	{
		id: 1,
		author: 'Kevin Kwan',
		title: 'Crazy rich asians',
		rating: {
			amountReview: 252,
			grade: 4
		},
		description:
			'the outrageously funny debut novel about three super-rich, pedigreed Chinese families and the gossip...',
		price: 4.99,
		image: '/book2.png'
	},
	{
		id: 2,
		author: 'Margaret Atwood',
		title: 'The handmaid’s tale',
		rating: {
			amountReview: 1_100_000,
			grade: 4
		},
		description:
			"This novel can be interpreted as a double narrative, Offred's tale and the handmaids' tales. The night...",
		price: 6.99,
		image: '/book3.png'
	}
]

const ShoppingCart: NextPage = () => {
	const shoppingCartProps = useShoppingCart(bookData)

	return (
		<Layout>
			<main>
				<div className='container'>
					<section className={styles.shopping_cart}>
						<h1>SHOPPING CART</h1>
						<ShoppingCartTable {...shoppingCartProps} />
						<div>
							<h1>{`TOTAL PRICE: ${currency(
								shoppingCartProps.totalPrice
							)}`}</h1>
							<Button>CHECKOUT</Button>
						</div>
					</section>
				</div>
			</main>
		</Layout>
	)
}

export default ShoppingCart
