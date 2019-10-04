/* eslint-disable no-unused-vars */
import React from 'react'
import PropTypes from 'prop-types'
import { Grid, Cell } from 'styled-css-grid'

import styles from './Section.module.scss'

/**
* @author zilahir
* @function Section
* */

const Section = props => {
	const { imagePos, bgColor } = props
	return (
		<div className={styles.sectionWrapper}>
			<Grid columns={12}>
				<Cell width={6}>
					<p>
						left
					</p>
				</Cell>
				<Cell width={6}>
					<p>
						right
					</p>
				</Cell>
			</Grid>
		</div>
	)
}

Section.propTypes = {
	bgColor: PropTypes.string.isRequired,
	imagePos: PropTypes.string.isRequired,
}

export default Section
