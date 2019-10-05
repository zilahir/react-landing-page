import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { motion } from 'framer-motion'

import styles from './Image.module.scss'

/**
* @author zilahir
* @function Image
* */

const Img = styled.img`
	max-width: ${props => props.maxWidth}px;
`

const Image = props => {
	const { src, className, alt, maxWidth, secondaryImage } = props
	return (
		<div className={styles.imageWrapper}>
			{
				secondaryImage
					? (
						<img className={styles.sImage} alt={alt} src={secondaryImage} />
					)
					: null
			}
			<motion.div
				initial={{ x: 0 }}
				animate={{ x: 100 }}
			>
				<Img maxWidth={maxWidth} src={src} className={className} alt={alt} />
			</motion.div>
		</div>
	)
}

Image.defaultProps = {
	className: styles.imageStyle,
	maxWidth: null,
	secondaryImage: null,
}

Image.propTypes = {
	alt: PropTypes.string.isRequired,
	className: PropTypes.string,
	maxWidth: PropTypes.number,
	secondaryImage: PropTypes.string,
	src: PropTypes.string.isRequired,
}

export default Image
