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

const Image = styled.li`
	position: relative;
	&:hover {
		&:after {
			opacity: 1;
			content: '';
			background-image: url(${props => props.hoverImage});
			width: 100px;
			height: 100px;
			position: absolute;
			display: block;
			top: 0;
			background-size: cover;
			margin-left: auto;
			margin-right: auto;
			left: 0;
			right: 0;
		}
	}
`

const TestimonialItem = props => {
	const { key, src, alt, className } = props
	const hoverImage = src.split('.')
	return (
		<Image hoverImage={require(`../../../assets/img/testimonials/${hoverImage[0]}_hover.png`)} className={className} key={key}>
			<img className="demo" src={require(`../../../assets/img/testimonials/${src}`)} alt={alt} />
		</Image>
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
