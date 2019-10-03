import React from 'react'

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
			<div className={styles.socialContainer}>
				<ul>
					<li>
						facebook
					</li>
					<li>
						whatever
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
