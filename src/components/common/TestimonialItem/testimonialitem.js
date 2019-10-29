/* eslint-disable global-require */
/* eslint-disable import/no-dynamic-require */
import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

import styles from './TestimonialItem.module.scss'

/**
* @author martincserep
* @function TestimonialsItem
* */

const Image = styled.div`
`

const TestimonialItem = props => {
	const { index, src, alt, className } = props
	return (
		<Image hoverImage={src} className={className} index={index}>
			<img className="demo" src={src} alt={alt} />
		</Image>
	)
}

TestimonialItem.defaultProps = {
	className: styles.testimonalItem,
}

TestimonialItem.propTypes = {
	alt: PropTypes.string.isRequired,
	className: PropTypes.string,
	index: PropTypes.number.isRequired,
	src: PropTypes.string.isRequired,
}

export default TestimonialItem
