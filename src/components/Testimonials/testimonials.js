import React from 'react'

import styles from './Testimonials.module.scss'
import TestimonialItem from '../common/TestimonialItem/testimonialitem'
import { testimonials } from '../api/testimonials'

/**
* @author martincserep
* @function Testimonials
* */

const Testimonials = () => (
	<div className={styles.testimonalWrapper}>
		<ul>
			{testimonials.getTestimonials().map(testimonialItems => (
				<TestimonialItem
					src={testimonialItems.src}
					key={testimonialItems.key}
				/>
			))}
		</ul>
	</div>

)


export default Testimonials
