import React, { useState } from 'react'
import PropTypes from 'prop-types'
import { Waypoint } from 'react-waypoint'
import styled from 'styled-components'
import { motion } from 'framer-motion'
import { Parallax } from 'react-parallax'

import redStars from '../../../assets/img/misc/red_starts.svg'
import '@zilahir/html5-device-mockups/dist/device-mockups.css'
import styles from './Phone.module.scss'

/**
* @author zilahri,martincserep
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
				// purpleImages={purpleImages}
				className={styles.phone}
				style={
					toggle
				}
			>
				<Parallax
					bgImage={
						redStars
					}
					strength={300}
					style={{
						height: '400px',
						width: '600px',
						position: 'absolute',
						top: '50px',
					}}
					bgImageStyle={{
						position: 'absolute',
						width: '600px',
						height: '400px',
					}}
				/>
				<motion.div
					initial={{ x: 0 }}
					animate={{ x: 100 }}
				/>
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
