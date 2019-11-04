export const headerMenu = {
	menuItems: [
		{ key: 1, label: 'Home', slug: '' },
		{ key: 2, label: 'About us', slug: 'About' },
		{ key: 3, label: 'Our product', slug: 'Product' },
		{ key: 4, label: 'Carrier', slug: 'Jobs' },
	],
	getHeaderMenu: () => headerMenu.menuItems,
}
