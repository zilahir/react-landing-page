import React, { useState, useEffect } from 'react'
import { useStaticQuery, graphql } from 'gatsby'

import MenuItem from '../common/MenuItem'
import styles from './TopHeader.module.scss'

/**
* @author martincserep
* @function TopHeader
* */

const TopHeader = () => {
	const [curPath, setCurPath] = useState(null)
	function getCurrantPath() {
		const curpath = window.location.pathname
		setCurPath(curpath)
	}

	useEffect(() => {
		getCurrantPath()
	}, [])

	const Logo = 'https://via.placeholder.com/150/5abd79/ffffff?Text=gatsbyjs'

	const JobsData = useStaticQuery(graphql`
		query {
		team {
			menus {
				id
				menuItem
				target
			  }
		  }
		}
	`)
	return (
		<div className={`${styles.topHeader} ${curPath === '#/' ? styles.homePage : ''}`}>
			<div className={styles.header}>
				<ul className={styles.logo}>
					<li>
						<img alt="foodoclock" src={Logo} />
					</li>
				</ul>
				<ul className={styles.headerList}>
					{JobsData.team.menus.map(menuItem => (
						<MenuItem
							key={menuItem.id}
							index={1}
							label={menuItem.menuItem}
							target={`${menuItem.target}`}
							isActive={`${menuItem.menuItem}` === curPath ? true : null}
						/>
					))}
				</ul>
				<ul className={styles.menuRight}>
					<MenuItem index={8} target="/contact" label="Contact" />
				</ul>
			</div>
		</div>
	)
}

export default TopHeader
