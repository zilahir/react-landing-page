export const footerMenu = {
	menuItems: [
		{ key: 1, label: 'Home', slug: 'home' },
		{ key: 2, label: 'About us', slug: 'aboutus' },
	],
	footerTexts: [
		{ legalText: 'Amet sint cupidatat laboris nostrud duis anim ipsum occaecat laboris non cillum Lorem in. Aute reprehenderit duis ut ex duis aliquip exercitation. Quis officia laborum eiusmod consectetur sint exercitation anim ad exercitation velit et deserunt excepteur incididunt. Ea ullamco reprehenderit cupidatat consectetur ad exercitation esse aute ad. Enim id irure exercitation est.' },
		{ rights: 'All rights reserved' },
	],
	getFooterMenu: () => footerMenu.menuItems,
	getFooterTexts: () => footerMenu.footerTexts,
}
