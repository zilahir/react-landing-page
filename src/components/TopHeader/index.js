import React from 'react'

import MenuItem from '../common/MenuItem'
import { headerMenu } from '../api/headerMenu'
import styles from './TopHeader.module.scss'

/**
* @author
* @function TopHeader
* */

const TopHeader = () => (
	<div className={styles.topHeader}>
		<div className={styles.header}>
			<p className={styles.headerLogo}>Logo</p>
			<ul className={styles.headerList}>
				{headerMenu.getHeaderMenu().map(menuItem => (
					<MenuItem label={menuItem.label} />
				))}
			</ul>
			<p className={styles.contact}>Contact</p>
		</div>
	</div>
)

export default TopHeader
