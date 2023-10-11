export const currency = (currency: number): string => {
	return new Intl.NumberFormat('en-US', {
		currency: 'USD',
		style: 'currency'
	}).format(currency)
}
