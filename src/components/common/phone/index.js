import React from 'react'
import PropTypes from 'prop-types'

import styles from './Phone.module.scss'
import '@zilahir/html5-device-mockups/dist/device-mockups.min.css'

/**
* @author
* @function Phone
* */

const Phone = props => {
	const { children } = props
	return (
		<div classNameName={styles.phoneRootWrapper}>
			<div className="device-wrapper">
				<div className="device" data-device="iphoneX" data-orientation="portrait" data-color="black">
					<div className="screen">
						{children}
					</div>
				</div>
			</div>
		</div>
	)
}

Phone.propTypes = {
	children: PropTypes.node.isRequired,
}

export default Phone
