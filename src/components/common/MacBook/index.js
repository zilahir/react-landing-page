import React from 'react'
import PropTypes from 'prop-types'

import styles from './Macbok.module.scss'

/**
* @author
* @function MacBook
* */

const MacBook = props => {
	const { children } = props
	return (
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
								http://andytran.me
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

	)
}

MacBook.defaultProps = {
	children: null,
}

MacBook.propTypes = {
	children: PropTypes.node,
}

export default MacBook
