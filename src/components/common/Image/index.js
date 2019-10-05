import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

import styles from './Image.module.scss'

/**
* @author zilahir
* @function Image
* */

const Img = styled.img`
	max-width: ${props => props.maxWidth}px;
`

const Image = props => {
	const { src, className, alt, maxWidth } = props
	return (
		<Img maxWidth={maxWidth} src={src} className={className} alt={alt} />
	)
}

Image.defaultProps = {
	className: styles.imageStyle,
	maxWidth: null,
}

Image.propTypes = {
	alt: PropTypes.string.isRequired,
	className: PropTypes.string,
	maxWidth: PropTypes.number,
	src: PropTypes.string.isRequired,
}

export default Image
