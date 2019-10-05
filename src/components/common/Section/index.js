/* eslint-disable no-unused-vars */
import React from 'react'
import PropTypes from 'prop-types'
import { Row, Col } from 'react-flexbox-grid'

import styles from './Section.module.scss'

/**
* @author zilahir
* @function Section
* */

const Section = props => {
	const { imagePos, bgColor, children } = props
	return (
		<div className={styles.sectionWrapper}>
			<Row>
				<Col
					xs={12}
					lg={5}
					md={6}
					lgOffset={1}
					className={styles.textContainer}
				>
					{
						children.map(child => (
							child.key !== 'image'
								? (
									child
								)
								: null
						))
					}
				</Col>
				<Col
					xs={12}
					lg={5}
					md={6}
					lgOffset={1}
				>
					{
						children.map(child => (
							child.key === 'image'
								? (
									child
								)
								: null
						))
					}
				</Col>
			</Row>
		</div>
	)
}

Section.propTypes = {
	bgColor: PropTypes.string.isRequired,
	children: PropTypes.node.isRequired,
	imagePos: PropTypes.string.isRequired,
}

export default Section
