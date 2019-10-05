import React from 'react'

import styles from './TestimonialItem.module.scss'

/**
* @author martincserep
* @function TestimonialsItem
* */

const TestimonialItem = values => {
	const { src, alt } = values
	return (
		<img className={styles} src={src} alt={alt} />
	)
}


export default TestimonialItem
