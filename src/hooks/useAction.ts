import { bindActionCreators } from '@reduxjs/toolkit'
import { useDispatch } from 'react-redux'
import { useMemo } from 'react'

import { categoriesSlice } from '@/store/categories/categories.slice'

export const useAction = () => {
	const dispatch = useDispatch()

	return useMemo(
		() => bindActionCreators(categoriesSlice.actions, dispatch),
		[dispatch]
	)
}
