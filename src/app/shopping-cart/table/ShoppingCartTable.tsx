import { FunctionComponent } from 'react'
import Image from 'next/image'
import clsx from 'clsx'

import BookCatalogItemRating from '../../../components/home/book-catalog/item/rating/BookCatalogItemRating'

import { currency } from '../../../utils/currency'

import { INewBookDataProps } from '../useShoppingCart'
import styles from './ShoppingCartTable.module.scss'

interface IShoppingCartTableProps {
	newBookData: INewBookDataProps[]
	handleChangeQuantity: (variant: string, book: INewBookDataProps) => void
}

const tableTitle = ['item', 'quantity', 'price', 'delivery']

const ShoppingCartTable: FunctionComponent<IShoppingCartTableProps> = ({
	newBookData: bookData,
	handleChangeQuantity
}) => {
	const handleSwitch = (book: INewBookDataProps, title: string) => {
		switch (title) {
			case 'item':
				return (
					<>
						<Image src={book.image} alt={book.title} width={102} height={145} />
						<div>
							<h3>{book.title}</h3>
							<h4>{book.author}</h4>
							<BookCatalogItemRating book={book} />
						</div>
					</>
				)
			case 'quantity':
				return (
					<div>
						<button
							onClick={() => handleChangeQuantity('decrement', book)}
							className={styles.minus}
						></button>
						<span>{book.quantity}</span>
						<button
							onClick={() => handleChangeQuantity('increment', book)}
							className={styles.plus}
						></button>
					</div>
				)
			case 'price':
				return currency(book.price)
			default:
				return 'Shipping: delivery'
		}
	}
	return (
		<div className={styles.table}>
			{tableTitle.map(title => (
				<div key={title} className={styles.column}>
					<h4>{title}</h4>
					{bookData.map(book => (
						<div
							key={book.id}
							className={clsx(styles.row, {
								[styles[title]]: title
							})}
						>
							{handleSwitch(book, title)}
						</div>
					))}
				</div>
			))}
		</div>
	)
}

export default ShoppingCartTable
