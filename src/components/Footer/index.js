import React from 'react'

import styles from './Footer.module.scss'

/**
* @author zilahir
* @function Footer
* */

const Footer = () => (
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
	</footer>
)


export default Footer
