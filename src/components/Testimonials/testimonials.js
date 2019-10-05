import React from 'react'
import { Row, Col } from 'react-flexbox-grid'

import styles from './Testimonials.module.scss'
import TestimonialItem from '../common/TestimonialItem/testimonialitem'
import { testimonials } from '../api/testimonials'

/**
* @author martincserep
* @function Testimonials
* */

const Testimonials = () => (
	<div className={styles.testimonialWrapper}>
		<Row>
			<Col lg={12}>
				<ul className={styles.testimonalList}>
					{testimonials.getTestimonials().map(testimonialItems => (
						<TestimonialItem
							src={testimonialItems.src}
							key={testimonialItems.key}
						/>
					))}
				</ul>
			</Col>
		</Row>
	</div>

)


export default Testimonials
