import React from 'react'
import { Row, Col } from 'react-flexbox-grid'
import { Waypoint } from 'react-waypoint'
import { motion, useAnimation } from 'framer-motion'

import styles from './Testimonials.module.scss'
import TestimonialItem from '../common/TestimonialItem/testimonialitem'
import { testimonials } from '../api/testimonials'

/**
* @author martincserep, zilahri
* @function Testimonials
* */


const Testimonials = () => {
	const variants = {
		visible: i => ({
			opacity: 1,
			transition: {
				delay: i * 0.3,
			},
		}),
		hidden: { opacity: 0 },
	}
	const container = {
		hidden: { opacity: 1, scale: 1 },
		visible: {
			opacity: 1,
			scale: 1,
			transition: {
				delay: 0.3,
				when: 'beforeChildren',
				staggerChildren: 0.1,
			},
		},
	}
	const controls = useAnimation()

	function fadeIn() {
		controls.start('visible')
	}

	return (
		<Waypoint
			onEnter={() => fadeIn()}
			bottomOffset={300}
		>
			<div className={styles.testimonial}>
				<div className={styles.testimonialWrapper}>
					<Row>
						<Col lg={12}>
							<motion.ul
								className={`${styles.testimonalList} ${container}`}
								variants={container}
								initial="hidden"
								animate={controls}
							>
								{testimonials.getTestimonials().map((testimonialItems, i) => (
									<motion.li
										custom={i}
										animate={controls}
										variants={variants}
									>
										<TestimonialItem
											src={testimonialItems.src}
											key={testimonialItems.key}
										/>
									</motion.li>
								))}
							</motion.ul>
						</Col>
					</Row>
				</div>
			</div>
		</Waypoint>
	)
}

export default Testimonials
