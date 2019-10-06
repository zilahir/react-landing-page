import React from 'react'
import { Grid, Row, Col } from 'react-flexbox-grid'
import { motion } from 'framer-motion'
import { Parallax } from 'react-parallax'

import purpleDots from '../../assets/img/misc/pruple_dots.svg'
import Input from '../../components/Input'
import TopHeader from '../../components/TopHeader'
import Button from '../../components/common/Button'
import HeaderH1 from '../../components/common/HeaderH1'
import styles from './Contact.module.scss'
import Footer from '../../components/Footer'
import Paragraph from '../../components/common/Paragraph'

/**
* @author martincserep
* @function Contactpage
* */

// eslint-disable-next-line arrow-body-style
const Contactpage = () => {
	return (
		<Grid
			fluid
		>
			<TopHeader />
			<Row>
				<Col lg={5} lgOffset={1} xs={12}>
					<HeaderH1 key="header" text="Contact us" />
					<Paragraph text="Test" />
				</Col>
				<Col lg={6} xs={12}>
					<Parallax
						bgImage={
							purpleDots
						}
						strength={300}
						style={{
							height: '300px',
							width: '300px',
							position: 'absolute',
							top: '150px',
							right: '100px',
						}}
						bgImageStyle={{
							position: 'absolute',
							width: '300px',
							height: '300px',
						}}
					/>
					<motion.div
						initial={{ x: 0 }}
						animate={{ x: 100 }}
					/>
					<div className={styles.contactForm}>
						<Input type="text" placeholder="Your name" />
						<Input type="email" placeholder="Your e-mail" />
						<Input type="text" placeholder="Your message" />
						<div className={styles.btnContainer}>
							<Button text="Contact Us" />
						</div>
					</div>
				</Col>
			</Row>
			<Footer />
		</Grid>
	)
}

export default Contactpage
