import { configureStore } from '@reduxjs/toolkit'
import {
	FLUSH,
	REHYDRATE,
	PAUSE,
	PERSIST,
	PURGE,
	REGISTER
} from 'redux-persist'

import { categoriesSlice } from './categories/categories.slice'
import { booksSlice } from './books/books.slice'

export const store = configureStore({
	reducer: {
		categories: categoriesSlice.reducer,
		books: booksSlice.reducer
	},
	middleware: getDefaultMiddleware =>
		getDefaultMiddleware({
			serializableCheck: {
				ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER]
			}
		})
})

export type RootState = ReturnType<typeof store.getState>
