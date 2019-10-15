import React, { useEffect } from 'react'
import PropTypes from 'prop-types'
import { motion, useAnimation } from 'framer-motion'
import { Parallax } from 'react-parallax'
import { useMediaQuery } from 'react-responsive'

import styles from './Image.module.scss'

/**
* @author zilahir
* @function Image
* */

const Image = props => {
	const { src, className, alt, maxWidth, secondaryImage } = props

	const controls = useAnimation()
	const isTabletOrMobile = useMediaQuery({ query: '(max-width: 1224px)' })
	const isTabletOrMobileDevice = useMediaQuery({
		query: '(max-device-width: 1224px)',
	})

	const animation = {
		start: {
			x: 0,
		},
		end: {
			x: 100,
		},
	}

	useEffect(() => {
		if (!isTabletOrMobile && !isTabletOrMobileDevice) {
			controls.start('end')
		}
	}, [controls])

	return (
		<div className={styles.imageWrapper}>
			{
				secondaryImage
					? (
						<Parallax
							bgImage={
								secondaryImage
							}
							className={className}
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
				initial="start"
				animate={controls}
				variants={animation}
				transition={{ duration: 1, delay: 0.3 }}
			>
				<Parallax
					blur={0}
					bgImage={src}
					bgImageAlt={alt}
					strength={200}
					style={{
						width: maxWidth,
						height: '600px',
					}}
					bgImageStyle={{
						top: '10%',
					}}
				/>
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
