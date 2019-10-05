import React, { useState } from 'react'
import PropTypes from 'prop-types'
import { Waypoint } from 'react-waypoint'
import styled from 'styled-components'

import purpleImages from '../../../assets/img/misc/pruple_dots.svg'
import '@zilahir/html5-device-mockups/dist/device-mockups.css'
import styles from './Phone.module.scss'

/**
* @author zilahri
* @function Phone
* */

const PurleWrapper = styled.div`
	&:before {
		content: '';
		background-image: url(${props => props.purpleImages});
		position: absolute;
		width: 300px;
		height: 200px;
		top: 0;
		left: 50px;
		background-repeat: no-repeat;
	}
	.device-wrapper {
		padding-top: 50px;
	}
`

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
			<PurleWrapper
				purpleImages={purpleImages}
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
			</PurleWrapper>
		</Waypoint>
	)
}

Phone.propTypes = {
	children: PropTypes.node.isRequired,
}

export default Phone
