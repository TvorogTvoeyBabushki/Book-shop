import { FunctionComponent } from 'react'
import Image from 'next/image'

import Button from '../../../ui/button/Button'

import { currency } from '../../../../utils/currency'

import { IBooksDataProps } from '@/app/api/books/route'

import BookCatalogItemRating from './rating/BookCatalogItemRating'
import styles from './BookCatalogItem.module.scss'

const BookCatalogItem: FunctionComponent<{ book: IBooksDataProps }> = ({
	book
}) => {
	return (
		<div className={styles.book_item}>
			<Image
				src={
					book.volumeInfo.imageLinks?.thumbnail
						? book.volumeInfo.imageLinks?.thumbnail
						: '/book3.png'
				}
				alt={book.volumeInfo.title}
				width={212}
				height={300}
			/>
			<div>
				{book.volumeInfo.authors?.length ? (
					<h4>
						{book.volumeInfo.authors.map((author, index) =>
							index === book.volumeInfo.authors.length - 1
								? author
								: `${author}, `
						)}
					</h4>
				) : (
					''
				)}
				<h3>{book.volumeInfo.title}</h3>
				<BookCatalogItemRating book={book} />
				<p>{book.volumeInfo.description}</p>
				{book.saleInfo.retailPrice?.amount ? (
					<div className={styles.price}>
						{currency(book.saleInfo.retailPrice.amount)}
					</div>
				) : (
					''
				)}
				<Button>buy now</Button>
			</div>
		</div>
	)
}

export default BookCatalogItem
