import { RootState } from './store'

import { IBooksDataProps } from '@/app/api/books/route'

import { ICategoriesInitialState } from './categories/categories.slice'

export const selectBooks = (state: RootState): IBooksDataProps[] =>
	state.books.books

export const selectCategories = (state: RootState): ICategoriesInitialState =>
	state.categories
