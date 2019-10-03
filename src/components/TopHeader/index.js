import React from 'react'

import MenuItem from '../common/MenuItem'
import { headerMenu } from '../api/headerMenu'
import styles from './TopHeader.module.scss'
import Logo from '../../assets/img/logo.png'

/**
* @author martincserep
* @function TopHeader
* */

const TopHeader = () => (
	<div className={styles.topHeader}>
		<div className={styles.header}>
			<ul className={styles.logo}>
				<li>
					<img alt="foodoclock" src={Logo} />
				</li>
			</ul>
			<ul className={styles.headerList}>
				{headerMenu.getHeaderMenu().map(menuItem => (
					<MenuItem label={menuItem.label} />
				))}
			</ul>
			<ul className={styles.menuRight}>
				<li>
					<MenuItem label="Contact" />
				</li>
			</ul>
		</div>
	</div>
)

export default TopHeader
