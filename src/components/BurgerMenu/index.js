import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { slide as Menu } from 'react-burger-menu'
import { menu as MenuIcon } from 'react-icons-kit/feather/menu'
import Icon from 'react-icons-kit'
import { useMediaQuery } from 'react-responsive'

import { headerMenu } from '../api/headerMenu'
import styles from './BurgerMenu.module.scss'

/**
* @author zilahir
* @function BurgerMenu
* */

const Logo = 'https://via.placeholder.com/150/5abd79/ffffff?Text=gatsbyjs'

const BurgerMenu = () => {
	const [isBurgerMenuOpen, setBurgerMenuOpen] = useState(false)
	const isTabletOrMobile = useMediaQuery({ query: '(max-width: 1224px)' })
	const isTabletOrMobileDevice = useMediaQuery({
		query: '(max-device-width: 1224px)',
	})
	return (
		<div>
			{
				isTabletOrMobileDevice && isTabletOrMobile
					? (
						<>
							<div
								onClick={() => setBurgerMenuOpen(!isBurgerMenuOpen)}
								onKeyPress={() => null}
								role="button"
								tabIndex={-1}
								className={styles.burgerButton}
								style={{
									color: '#5abd79',
								}}
							>
								<Icon size="3em" icon={MenuIcon} />
							</div>
							<Menu
								isOpen={isBurgerMenuOpen}
								customBurgerIcon={false}
								itemListClassName={styles.menu}
								menuClassName={styles.menuContainer}
							>
								<Link to="/">
									<img className={styles.logo} alt="log" src={Logo} />
								</Link>
								{
									headerMenu.getHeaderMenu().map(menuItem => (
										<Link
											to={menuItem.slug}
											key={menuItem.key}
										>
											{menuItem.label}
										</Link>
									))
								}
							</Menu>
						</>
					)
					: null
			}
		</div>
	)
}

export default BurgerMenu
