import React, { useState } from 'react'
import { Row, Col } from 'react-flexbox-grid'
import { Waypoint } from 'react-waypoint'

import styles from './Testimonials.module.scss'
import TestimonialItem from '../common/TestimonialItem/testimonialitem'
import { testimonials } from '../api/testimonials'

/**
* @author martincserep
* @function Testimonials
* */

const [toggle, setToggle] = useState({
	trans: '200px',
	overflow: 'hidden',
})

function toggleTestimonials() {
	setToggle({
		height: '100%',
	})
}

const Testimonials = () => (
	<Waypoint
		onEnter={() => toggleTestimonials()}
		bottomOffset={600}
	>
		<div className={styles.testimonial} style={toggle}>
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
		</div>
	</Waypoint>

)


export default Testimonials
