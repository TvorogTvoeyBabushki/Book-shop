import { FunctionComponent } from 'react'
import Image from 'next/image'

import Button from '@/components/ui/button/Button'

import { currency } from '@/utils/currency'

import BookCatalogItemRating from './rating/BookCatalogItemRating'
import styles from './BookCatalogItem.module.scss'
import { IBookDataProps } from '../bookData'

const BookCatalogItem: FunctionComponent<{ book: IBookDataProps }> = ({
	book
}) => {
	return (
		<div className={styles.book_item}>
			<Image src={book.image} alt={book.title} width={212} height={300} />
			<div>
				<h4>{book.author}</h4>
				<h3>{book.title}</h3>
				<BookCatalogItemRating book={book} />
				<p>{book.description}</p>
				<div className={styles.price}>{currency(book.price)}</div>
				<Button>buy now</Button>
			</div>
		</div>
	)
}

export default BookCatalogItem
