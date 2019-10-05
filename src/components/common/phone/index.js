import React, { useState } from 'react'
import PropTypes from 'prop-types'
import { Waypoint } from 'react-waypoint'

import '@zilahir/html5-device-mockups/dist/device-mockups.css'
import styles from './Phone.module.scss'

/**
* @author zilahri
* @function Phone
* */

const Phone = props => {
	const { children } = props
	const [toggle, setToggle] = useState({
		height: '200px',
		overflow: 'hidden',
	})

	function togglePhone() {
		setToggle({
			height: '100%',
		})
	}

	return (
		<Waypoint
			onEnter={() => togglePhone()}
			bottomOffset={600}
		>
			<div
				id="test"
				className={styles.phone}
				style={
					toggle
				}
			>
				<div className="device-wrapper">
					<div className="device" data-device="iPhoneX" data-orientation="portrait" data-color="dark">
						<div className="screen">
							{children}
						</div>
					</div>
				</div>
			</div>
		</Waypoint>
	)
}

Phone.propTypes = {
	children: PropTypes.node.isRequired,
}

export default Phone
