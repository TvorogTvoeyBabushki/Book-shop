import { FunctionComponent } from 'react'

import Button from '@/components/ui/button/Button'

import BookCatalogItem from './item/BookCatalogItem'
import styles from './BookCatalog.module.scss'
import { bookData } from './bookData'

const BookCatalog: FunctionComponent = () => {
	return (
		<div className={styles.book_catalog}>
			{bookData.map(book => (
				<BookCatalogItem key={book.id} book={book} />
			))}
			<div className={styles.load_btn}>
				<Button>Load more</Button>
			</div>
		</div>
	)
}

export default BookCatalog
