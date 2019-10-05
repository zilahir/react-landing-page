/* eslint-disable global-require */
/* eslint-disable import/no-dynamic-require */
import React from 'react'
import PropTypes from 'prop-types'

import styles from './TestimonialItem.module.scss'

/**
* @author martincserep
* @function TestimonialsItem
* */

const TestimonialItem = props => {
	const { key, src, alt, className } = props
	return (
		<li key={key}>
			<img className={className} src={require(`../../../assets/img/testimonials/${src}`)} alt={alt} />
		</li>
	)
}

TestimonialItem.defaultProps = {
	className: styles.testimonalItem,
}

TestimonialItem.propTypes = {
	alt: PropTypes.string.isRequired,
	className: PropTypes.string,
	key: PropTypes.number.isRequired,
	src: PropTypes.string.isRequired,
}

export default TestimonialItem
