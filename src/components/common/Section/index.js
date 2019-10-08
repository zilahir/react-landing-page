/* eslint-disable no-unused-vars */
import React from 'react'
import PropTypes from 'prop-types'
import { Row, Col } from 'react-flexbox-grid'
import styled from 'styled-components'

import styles from './Section.module.scss'

/**
* @author zilahir
* @function Section
* */

const SectionContainer = styled.div`
	background-color: ${props => props.backgroundColor};
`

const Section = props => {
	const { imagePos, bgColor, children, hero } = props
	return (
		<SectionContainer backgroundColor={hero ? '#c8e9d2' : '#ffffff'} className={styles.sectionWrapper}>
			{
				imagePos === 'right'
					? (
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
								xsOffset={0}
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
					)
					: (
						<Row>
							<Col
								xs={12}
								lg={5}
								md={6}
								lgOffset={1}
								xsOffset={0}
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
						</Row>
					)
			}
		</SectionContainer>
	)
}

Section.defaultProps = {
	hero: false,
}

Section.propTypes = {
	bgColor: PropTypes.string.isRequired,
	children: PropTypes.node.isRequired,
	hero: PropTypes.bool,
	imagePos: PropTypes.string.isRequired,
}

export default Section
