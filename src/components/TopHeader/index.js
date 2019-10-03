import React from 'react'

import MenuItem from '../common/MenuItem/MenuItem'
import { headerMenu } from '../api/headerMenu'


/**
* @author
* @function TopHeader
* */

const TopHeader = () => (
	<div>
		<div>
			<ul>
				{headerMenu.getHeaderMenu().map(menuItem => (
					<MenuItem label={menuItem.label} />
				))}
			</ul>
		</div>
	</div>
)

export default TopHeader
