import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { motion } from 'framer-motion'
import { Parallax } from 'react-parallax'

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
						<Parallax
							bgImage={
								secondaryImage
							}
							strength={300}
							style={{
								height: '300px',
								width: '300px',
								position: 'absolute',
								top: '-30px',
							}}
							bgImageStyle={{
								position: 'absolute',
								width: '400px',
								height: '200px',
							}}
						/>
					)
					: null
			}
			<motion.div
				initial={{ x: 0 }}
				animate={{ x: 100 }}
				transition={{ duration: 1, delay: 0.3 }}
			>
				<Img maxWidth={maxWidth} src={src} className={className} alt={alt} />
			</motion.div>
		</div>
	)
}

Image.defaultProps = {
	className: styles.imageStyle,
	maxWidth: 400,
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
