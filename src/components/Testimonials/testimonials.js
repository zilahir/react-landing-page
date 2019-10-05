import React from 'react'

import styles from './Testimonials.module.scss'
import TestimonialItem from '../common/TestimonialItem/testimonialitem'
import { testimonials } from '../api/testimonials'

/**
* @author martincserep
* @function Testimonials
* */

const Testimonials = () => (
	<div>
		<ul className={styles}>
			{testimonials.getTestimonials().map(testimonialItems => (
				<TestimonialItem
					src={testimonialItems.src}
				/>
			))}
		</ul>
	</div>

)


export default Testimonials
