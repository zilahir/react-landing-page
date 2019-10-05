import React from 'react'
import { FiFacebook, FiInstagram } from 'react-icons/fi'
import { Row, Col } from 'react-flexbox-grid'
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
				<Row
					columns={3}
					alignContent="center"
				>
					<Col xs={12} lg={4}>
						<p>
							lorem
						</p>
					</Col>
					<Col xs={12} lg={4}>
						<p>
							lorem
						</p>
					</Col>
				</Row>
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
