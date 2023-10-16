import { ButtonHTMLAttributes, FunctionComponent } from 'react'
import clsx from 'clsx'

import styles from './Button.module.scss'

interface IButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
	variant?: string
}

const Button: FunctionComponent<IButtonProps> = ({ children, variant }) => {
	return (
		<button
			className={clsx(styles.btn, {
				[styles.auth]: variant === 'auth'
			})}
		>
			{children}
		</button>
	)
}

export default Button
