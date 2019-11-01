import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { slide as Menu } from 'react-burger-menu'
import { menu as MenuIcon } from 'react-icons-kit/feather/menu'
import Icon from 'react-icons-kit'

import styles from './BurgerMenu.module.scss'

/**
* @author zilahir
* @function BurgerMenu
* */

const Logo = 'https://via.placeholder.com/150/5abd79/ffffff?Text=gatsbyjs'

const BurgerMenu = () => {
	const [isBurgerMenuOpen, setBurgerMenuOpen] = useState(false)
	return (
		<div>
			<div
				onClick={() => setBurgerMenuOpen(!isBurgerMenuOpen)}
				onKeyPress={() => null}
				role="button"
				tabIndex={0}
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
			>
				<Link to="/">
					<img className={styles.logo} alt="log" src={Logo} />
				</Link>
				<Link to="about">
					About
				</Link>
			</Menu>
		</div>
	)
}

export default BurgerMenu
