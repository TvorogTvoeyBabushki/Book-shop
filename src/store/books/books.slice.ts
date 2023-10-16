import { type PayloadAction, createSlice } from '@reduxjs/toolkit'

import { IBooksDataProps } from '@/app/api/books/route'

import { getBooks } from './books.actions'

interface IBooksInitialStateProps {
	books: IBooksDataProps[]
	shoppingCartBooks: IBooksDataProps[]
}

const initialState: IBooksInitialStateProps = {
	books: [],
	shoppingCartBooks: []
}

export const booksSlice = createSlice({
	name: 'books',
	initialState,
	reducers: {},
	extraReducers: builder => {
		builder.addCase(
			getBooks.fulfilled,
			(state, { payload }: PayloadAction<IBooksDataProps[]>) => {
				state.books = payload
			}
		)
	}
})
