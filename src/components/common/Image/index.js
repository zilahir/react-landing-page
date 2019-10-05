import React from 'react'
import PropTypes from 'prop-types'

import styles from './Image.module.scss'

/**
* @author zilahir
* @function Image
* */

const Image = props => {
	const { src, className, alt } = props
	return (
		<img src={src} className={className} alt={alt} />
	)
}

Image.defaultProps = {
	className: styles.imageStyle,
}

Image.propTypes = {
	alt: PropTypes.string.isRequired,
	className: PropTypes.string,
	src: PropTypes.string.isRequired,
}

export default Image
