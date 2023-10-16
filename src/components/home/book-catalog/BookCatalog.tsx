'use client'

import { FunctionComponent, useEffect, useState } from 'react'
import { useSelector } from 'react-redux'

import { getBooks } from '@/store/books/books.actions'
import { selectBooks, selectCategories } from '@/store/useSelect'
import { store } from '@/store/store'

import Button from '../../ui/button/Button'
import BookCatalogItem from './item/BookCatalogItem'
import styles from './BookCatalog.module.scss'

interface IAmountBooksProps {
	pageIndex: number
	maxResults: number
}

const BookCatalog: FunctionComponent = () => {
	const { categories } = useSelector(selectCategories)
	const books = useSelector(selectBooks)

	const limitItems = 36
	const amountNewItems = 6
	const initValueAmountBooks: IAmountBooksProps = {
		pageIndex: 0,
		maxResults: 6
	}
	const [amountBooks, setAmountBooks] =
		useState<IAmountBooksProps>(initValueAmountBooks)

	useEffect(() => {
		amountBooks.maxResults < limitItems &&
			store.dispatch(getBooks({ categories, ...amountBooks }))
	}, [categories, amountBooks])

	useEffect(() => {
		setAmountBooks(initValueAmountBooks)
	}, [categories])

	return (
		<div className={styles.book_catalog}>
			{books?.map((book, index) => <BookCatalogItem key={index} book={book} />)}
			{amountBooks.maxResults < limitItems && (
				<div className={styles.load_btn}>
					<Button
						onClick={() =>
							setAmountBooks(prev => ({
								pageIndex: prev.pageIndex + amountNewItems,
								maxResults: prev.maxResults + amountNewItems
							}))
						}
					>
						Load more
					</Button>
				</div>
			)}
		</div>
	)
}

export default BookCatalog
