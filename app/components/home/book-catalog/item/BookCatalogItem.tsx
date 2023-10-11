import { FunctionComponent } from 'react'
import Image from 'next/image'

import Button from '@/components/ui/button/Button'

import { currency } from '@/utils/currency'

import styles from './BookCatalogItem.module.scss'
import { IBookDataProps } from '../bookData'

const million = 1_000_000

const BookCatalogItem: FunctionComponent<{ book: IBookDataProps }> = ({
	book
}) => {
	return (
		<div className={styles.book_item}>
			<Image src={book.image} alt={book.title} width={212} height={300} />
			<div>
				<h4>{book.author}</h4>
				<h3>{book.title}</h3>
				<div className={styles.rating}>
					<div>
						{Array.from('stars').map((_, index) => (
							<svg
								width='12'
								height='11'
								viewBox='0 0 12 11'
								fill='none'
								xmlns='http://www.w3.org/2000/svg'
							>
								<path
									d='M6 0L7.80568 3.5147L11.7063 4.1459L8.92165 6.9493L9.52671 10.8541L6 9.072L2.47329 10.8541L3.07835 6.9493L0.293661 4.1459L4.19432 3.5147L6 0Z'
									fill={book.rating.grade >= index + 1 ? '#F2C94C' : '#EEEDF5'}
								/>
							</svg>
						))}
					</div>
					<div>
						{book.rating.amountReview > million
							? `${book.rating.amountReview / million}M`
							: book.rating.amountReview}{' '}
						review
					</div>
				</div>
				<p>{book.description}</p>
				<div className={styles.price}>{currency(book.price)}</div>
				<Button>buy now</Button>
			</div>
		</div>
	)
}

export default BookCatalogItem
