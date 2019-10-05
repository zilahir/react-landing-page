import React from 'react'
import PropTypes from 'prop-types'
import '@zilahir/html5-device-mockups/dist/device-mockups.css'

/**
* @author
* @function Phone
* */

const Phone = props => {
	const { children } = props
	return (
		<div>
			<div className="device-wrapper">
				<div className="device" data-device="iPhoneX" data-orientation="portrait" data-color="dark">
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
