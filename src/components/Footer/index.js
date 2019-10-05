import React from 'react'
import { FiFacebook, FiInstagram } from 'react-icons/fi'
import { Cell, Grid } from 'styled-css-grid'
import { Link } from 'react-router-dom'

import { footerMenu } from '../api/footer'
import styles from './Footer.module.scss'

/**
* @author zilahir
* @function Footer
* */

const Footer = () => {
	const { legalText } = footerMenu.getFooterTexts()[0]
	const { rights } = footerMenu.getFooterTexts()[1]
	return (
		<footer className={styles.footerWrapper}>
			<div className={styles.footerNavContainer}>
				<Grid
					columns={3}
					alignContent="center"
				>
					<Cell>
						<p>lorem</p>
					</Cell>
					<Cell>
						<p>lorem</p>
					</Cell>
				</Grid>
			</div>
			<div className={styles.socialContainer}>
				<ul>
					<li>
						<Link to="/">
							<FiFacebook size="2em" />
						</Link>
					</li>
					<li>
						<Link to="/">
							<FiInstagram size="2em" />
						</Link>
					</li>
				</ul>
			</div>
			<div className={styles.legalContainer}>
				<p>
					{new Date().getFullYear()}, { rights }
				</p>
				<small>
					{
						legalText
					}
				</small>
				<p className={styles.heart}>
					<small>
						made  with <span aria-label="heart" role="img">❤️</span> in Helsinki, Finland
					</small>
				</p>
			</div>
		</footer>
	)
}


export default Footer
