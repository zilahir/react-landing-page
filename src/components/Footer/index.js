import React from 'react'
import { FiFacebook, FiInstagram } from 'react-icons/fi'
import { Cell, Grid } from 'styled-css-grid'

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
						<p>lofasz</p>
					</Cell>
					<Cell>
						<p>lofasz</p>
					</Cell>
					<Cell>
						<p>lofasz</p>
					</Cell>
				</Grid>
			</div>
			<div className={styles.socialContainer}>
				<ul>
					<li>
						<FiFacebook size="2em" />
					</li>
					<li>
						<FiInstagram size="2em" />
					</li>
				</ul>
			</div>
			<div className={styles.legalContainer}>
				<p>
					{ rights }
				</p>
				<small>
					{
						legalText
					}
				</small>
			</div>
		</footer>
	)
}


export default Footer
