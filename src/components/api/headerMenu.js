export const headerMenu = {
	menuItems: [
		{ key: 1, label: 'Home', slug: '' },
		{ key: 2, label: 'About us', slug: 'about' },
		{ key: 3, label: 'Our product', slug: 'product' },
		{ key: 4, label: 'Carrier', slug: 'jobs' },
	],
	getHeaderMenu: () => headerMenu.menuItems,
}
