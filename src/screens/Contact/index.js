/* eslint-disable no-unused-vars */
import React, { useState } from 'react'
import { Grid, Row, Col } from 'react-flexbox-grid'
import { motion } from 'framer-motion'
import { Parallax } from 'react-parallax'
import { FiMail, FiPhoneCall, FiLifeBuoy } from 'react-icons/fi'
import UseAnimations from 'react-useanimations'

import purpleDots from '../../assets/img/misc/pruple_dots.svg'
import Input from '../../components/Input'
import TopHeader from '../../components/TopHeader'
import Button from '../../components/common/Button'
import HeaderH1 from '../../components/common/HeaderH1'
import HeaderH2 from '../../components/common/HeaderH2'
import styles from './Contact.module.scss'
import Footer from '../../components/Footer'
import Paragraph from '../../components/common/Paragraph'

/**
* @author martincserep
* @function Contactpage
* */

const Contactpage = () => {
	const [name, setName] = useState(null)
	const [email, setEmail] = useState(null)
	const [message, setMessage] = useState(null)
	const [isAnimationOn, setAnimationOn] = useState(false)
	return (
		<Grid
			fluid
		>
			<TopHeader />
			<Row>
				<Col
					lg={5}
					lgOffset={1}
					xs={12}
					style={{
						padding: '40px 80px',
					}}
				>
					<HeaderH2 className={styles.contactSub} text="Get in touch with us" />
					<HeaderH1 text="Contact us" />
					<Paragraph text="Exercitation pariatur fugiat incididunt esse consequat officia ut dolore.
					Voluptate ad nisi et fugiat reprehenderit cupidatat ipsum commodo proident veniam veniam ipsum magna et.
					Amet ipsum adipisicing adipisicing nostrud id culpa velit. Velit aliqua voluptate cillum ea nulla cillum
					eu exercitation laborum velit cupidatat mollit."
					/>
				</Col>
				<Col
					lg={6}
					xs={12}
				>
					<div className={styles.formContainer}>
						<Parallax
							bgImage={
								purpleDots
							}
							strength={300}
							style={{
								height: '300px',
								width: '300px',
								position: 'absolute',
								right: '200px',
								top: '-50px',
							}}
							bgImageStyle={{
								position: 'absolute',
								width: '300px',
								height: '300px',
							}}
						/>
						<motion.div
							initial={{ x: 300, opacity: 0 }}
							animate={{ x: 0, opacity: 1 }}
							transition={{ duration: 1, delay: 0.2 }}
						>
							<div className={styles.contactForm}>
								<div>
									<Input onChange={e => setName(e.target.value)} type="text" placeholder="Your name" />
									<Input onChange={e => setEmail(e.target.value)} type="email" placeholder="Your e-mail" />
									<Input onChange={e => setMessage(e.target.value)} type="text" placeholder="Your message" />
									<div className={styles.btnContainer}>
										<Button
											text="Send message"
											className={
												isAnimationOn ? styles.sendMessageBtnExtended
													: styles.sendMessageBtn
											}
											isAnimationOn={isAnimationOn}
											onClick={() => setAnimationOn(true)}
										>
											<UseAnimations
												animationKey="infinity"
												size={30}
											/>
										</Button>
									</div>
								</div>
							</div>
						</motion.div>
					</div>
				</Col>
			</Row>
			<div className={styles.options}>
				<Row>
					<Col lg={3} lgOffset={1} xs={12}>
						<div className={styles.option}>
							<FiMail size="3em" />
							<HeaderH2 text="Email us" />
							<Paragraph text="Voluptate ad nisi et fugiat reprehenderit cupidatat ipsum commodo proident veniam veniam ipsum magna et." />
						</div>
					</Col>
					<Col lg={3} lgOffset={1} xs={12}>
						<div className={styles.option}>
							<FiPhoneCall size="3em" />
							<HeaderH2 text="Call us" />
							<Paragraph text="Amet ipsum adipisicing adipisicing nostrud id culpa velit. Velit aliqua voluptate cillum ea nulla cillum" />
						</div>
					</Col>
					<Col lg={3} lgOffset={1} xs={12}>
						<div className={styles.option}>
							<FiLifeBuoy size="3em" />
							<HeaderH2 text="Support" />
							<Paragraph text="eu exercitation laborum velit cupidatat mollit." />
						</div>
					</Col>
				</Row>
			</div>
			<Footer />
		</Grid>
	)
}

export default Contactpage
