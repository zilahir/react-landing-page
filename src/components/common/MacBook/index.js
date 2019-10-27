import React, { useEffect } from 'react'
import PropTypes from 'prop-types'
import { motion, useAnimation } from 'framer-motion'
import { useMediaQuery } from 'react-responsive'

import styles from './Macbok.module.scss'

/**
* @author
* @function MacBook
* */

const MacBook = props => {
	const { children, barTitle } = props

	const controls = useAnimation()
	const isTabletOrMobile = useMediaQuery({ query: '(max-width: 1224px)' })
	const isTabletOrMobileDevice = useMediaQuery({
		query: '(max-device-width: 1224px)',
	})

	const animation = {
		start: {
			x: 50,
			opacity: 0,
		},
		end: {
			x: 0,
			opacity: 1,
		},
	}

	useEffect(() => {
		if (!isTabletOrMobile && !isTabletOrMobileDevice) {
			controls.start('end')
		}
	}, [controls])

	return (
		<motion.div
			initial="start"
			animate={controls}
			variants={animation}
			transition={{ duration: 1, delay: 0.3 }}
		>
			<div className={styles.macWrapper}>
				<div className={styles.macbook}>
					<div className={styles.screen}>
						<div className={styles.browser}>
							<div className={styles.toolbar}>
								<div className={styles.row_one}>
									<div className={styles.dot} />
									<div className={styles.dot} />
									<div className={styles.dot} />
								</div>
								<div className={styles.row_two}>
									<div className={styles.nav}>
										<div className={styles.prev}>&laquo;</div>
										<div className={styles.next}>&raquo;</div>
									</div>
									<div className={styles.address_bar}>
										{barTitle}
									</div>
									<div className={styles.search_bar} />
								</div>
							</div>
							<div className={styles.content}>
								{
									children || (
										<iframe
											className={styles.frame}
											height="100%"
											src="https://google.com"
											width="100%"
											title="content"
										/>
									)
								}
							</div>
						</div>
					</div>
					<div className={styles.body} />
				</div>
			</div>
		</motion.div>

	)
}

MacBook.defaultProps = {
	barTitle: '',
	children: null,
}

MacBook.propTypes = {
	barTitle: PropTypes.string,
	children: PropTypes.node,
}

export default MacBook
