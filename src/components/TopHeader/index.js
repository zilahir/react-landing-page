import React from 'react'

import { headerMenu } from '../api/headerMenu'

/**
* @author
* @function TopHeader
* */

const TopHeader = () => (
	<div>
		<h1>TopHeader</h1>
		<div>
			menuitems
			<ul>
				{headerMenu.getHeaderMenu().map(menuItem => (
					<li key={menuItem.key}>
						{menuItem.label}
					</li>
				))}
			</ul>
		</div>
	</div>
)

export default TopHeader
