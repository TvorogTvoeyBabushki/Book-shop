import { FunctionComponent } from 'react'
import clsx from 'clsx'

import styles from './Categories.module.scss'

const categoriesData = [
	'Architecture',
	'Art & Fashion',
	'Biography',
	'Business',
	'Crafts & Hobbies',
	'Drama',
	'Fiction',
	'Food & Drink',
	'Health & Wellbeing',
	'History & Politics',
	'Humor',
	'Poetry',
	'Psychology',
	'Science',
	'Technology',
	'Travel & Maps'
]

const Categories: FunctionComponent = () => {
	return (
		<nav className={styles.categories}>
			<ul>
				{categoriesData.map(category => (
					<li
						className={clsx('', {
							[styles.active]: category === 'Architecture'
						})}
					>
						<a href='#'>{category}</a>
					</li>
				))}
			</ul>
		</nav>
	)
}

export default Categories
