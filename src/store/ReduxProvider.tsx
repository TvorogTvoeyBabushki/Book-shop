'use client'

import { FunctionComponent, ReactNode } from 'react'
import { Provider } from 'react-redux'
import { store } from './store'

const ReduxProvider: FunctionComponent<{ children: ReactNode }> = ({
	children
}) => {
	return <Provider store={store}>{children}</Provider>
}

export default ReduxProvider
