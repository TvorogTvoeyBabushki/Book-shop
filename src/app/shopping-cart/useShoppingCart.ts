'use client'

import { useEffect, useMemo, useState } from 'react'

import { IBookDataProps } from '../../components/home/book-catalog/bookData'

export interface INewBookDataProps extends IBookDataProps {
	quantity: number
}

export const useShoppingCart = (bookData: IBookDataProps[]) => {
	const [newBookData, setNewBookData] = useState<INewBookDataProps[]>(
		bookData.map(book => ({ ...book, quantity: 1 }))
	)
	const [totalPrice, setTotalPrice] = useState<number>(
		bookData.reduce((acc: number, book) => {
			return acc + book.price
		}, 0)
	)

	const handleChangeQuantity = (variant: string, book: INewBookDataProps) => {
		if (variant === 'decrement' && book.quantity === 1) return

		setNewBookData(prev => {
			prev = prev.map(item => {
				if (item.author === book.author && item.title === book.title) {
					variant === 'decrement'
						? (item = { ...item, quantity: item.quantity - 1 })
						: (item = { ...item, quantity: item.quantity + 1 })
				}
				return item
			})
			return prev
		})
	}

	useEffect(() => {
		setTotalPrice(
			newBookData.reduce((acc: number, book) => {
				return acc + book.price * book.quantity
			}, 0)
		)
	}, [newBookData])

	return useMemo(
		() => ({ newBookData, totalPrice, handleChangeQuantity }),
		[newBookData, totalPrice]
	)
}
