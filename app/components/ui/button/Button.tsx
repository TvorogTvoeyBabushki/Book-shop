import { ButtonHTMLAttributes, FunctionComponent } from 'react'

import styles from './Button.module.scss'

interface IButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {}

const Button: FunctionComponent<IButtonProps> = ({ children }) => {
	return <button className={styles.btn}>{children}</button>
}

export default Button
