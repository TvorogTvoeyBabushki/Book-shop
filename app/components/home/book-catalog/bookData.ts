export interface IBookDataProps {
	id: number
	author: string
	title: string
	rating: {
		amountReview: number
		grade: number
	}
	description: string
	price: number
	image: string
}

export const bookData: IBookDataProps[] = [
	{
		id: 1,
		author: 'Kevin Kwan',
		title: 'Crazy rich asians',
		rating: {
			amountReview: 252,
			grade: 4
		},
		description:
			'the outrageously funny debut novel about three super-rich, pedigreed Chinese families and the gossip...',
		price: 4.99,
		image: '/book2.png'
	},
	{
		id: 2,
		author: 'Margaret Atwood',
		title: 'The handmaid’s tale',
		rating: {
			amountReview: 1_100_000,
			grade: 4
		},
		description:
			"This novel can be interpreted as a double narrative, Offred's tale and the handmaids' tales. The night...",
		price: 6.99,
		image: '/book3.png'
	},
	{
		id: 3,
		author: 'Aldous Huxley',
		title: 'Brave new world',
		rating: {
			amountReview: 1_300_000,
			grade: 4
		},
		description:
			'dystopian novel written in 1931 by English author Aldous Huxley, and published in 1932. Largely set in...',
		price: 12.43,
		image: '/book1.png'
	},
	{
		id: 4,
		author: 'Tara Westover',
		title: 'Educated',
		rating: {
			amountReview: 364,
			grade: 4
		},
		description:
			'It is a tale of fierce family loyalty and of the grief that comes with severing the closest of ties. With...',
		price: 12.68,
		image: '/book4.png'
	},
	{
		id: 5,
		author: 'Marianne Fritz',
		title: 'The weight of things',
		rating: {
			amountReview: 353,
			grade: 4
		},
		description:
			'You discover not an eccentric fluke of literary nature but rather a brilliant and masterful satiris...',
		price: 18.23,
		image: '/book6.png'
	},
	{
		id: 6,
		author: 'Chris Power',
		title: 'Mothers stories',
		rating: {
			amountReview: 454,
			grade: 4
		},
		description:
			'the stories in Mothers lay bare the emotional and psychic damage of life, love, and abandonment...',
		price: 12.35,
		image: '/book5.png'
	}
]
