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
	const {
		imagePos,
		bgColor,
		children,
		hero,
		leftXs,
		leftLg,
		lgOffsetLeft,
		lgOffsetRight,
		rightXs,
		rightLg,
		xsOffset,
		textContainer,
		alignSelfRight,
		inlineStyle,
	} = props
	return (
		<SectionContainer
			backgroundColor={hero ? '#c8e9d2' : '#ffffff'}
			className={`${styles.sectionWrapper} ${hero ? styles.heroWrapper : ''}`}
			style={{
				...inlineStyle,
			}}
		>
			{
				imagePos === 'right'
					? (
						<Row>
							<Col
								xs={leftXs}
								lg={leftLg}
								md={6}
								lgOffset={lgOffsetLeft}
								className={textContainer}
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
								xs={rightXs}
								lg={rightLg}
								md={6}
								lgOffset={lgOffsetRight}
								xsOffset={xsOffset}
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
								className={textContainer}
								style={{
									alignSelf: alignSelfRight,
								}}
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
	alignSelfRight: '',
	bgColor: null,
	hero: false,
	imagePos: 'right',
	inlineStyle: {},
	leftLg: 5,
	leftXs: 12,
	lgOffsetLeft: 1,
	lgOffsetRight: 1,
	rightLg: 5,
	rightXs: 12,
	textContainer: styles.textContainer,
	xsOffset: 1,
}

Section.propTypes = {
	alignSelfRight: PropTypes.string,
	bgColor: PropTypes.string,
	children: PropTypes.node.isRequired,
	hero: PropTypes.bool,
	imagePos: PropTypes.oneOf(['left', 'right']),
	inlineStyle: PropTypes.oneOfType([
		PropTypes.object,
		PropTypes.array,
	]),
	leftLg: PropTypes.number,
	leftXs: PropTypes.number,
	lgOffsetLeft: PropTypes.number,
	lgOffsetRight: PropTypes.number,
	rightLg: PropTypes.number,
	rightXs: PropTypes.number,
	textContainer: PropTypes.string,
	xsOffset: PropTypes.number,
}

export default Section
