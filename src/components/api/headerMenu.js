export const headerMenu = {
	menuItems: [
		{ key: 1, label: 'Home', slug: 'home' },
		{ key: 2, label: 'About us', slug: 'about' },
		{ key: 3, label: 'Our product', slug: 'product' },
	],
	getHeaderMenu: () => headerMenu.menuItems,
}
