/* eslint-disable no-unused-vars */
import React from 'react'
import PropTypes from 'prop-types'

import styles from './Section.module.scss'

/**
* @author zilahir
* @function Section
* */

const Section = props => {
	const { imagePos, bgColor } = props
	return (
		<div className={styles.sectionWrapper}>
			<p>lorem</p>
		</div>
	)
}

Section.propTypes = {
	bgColor: PropTypes.string.isRequired,
	imagePos: PropTypes.string.isRequired,
}

export default Section
