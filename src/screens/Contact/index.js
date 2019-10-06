import React from 'react'
import { Grid, Row, Col } from 'react-flexbox-grid'

import Input from '../../components/Input'
import TopHeader from '../../components/TopHeader'
import Button from '../../components/common/Button'
import HeaderH1 from '../../components/common/HeaderH1'
import styles from './Contact.module.scss'

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
				</Col>
				<Col lg={6} xs={12}>
					<div>
						<Input type="text" placeholder="Your name" />
						<Input type="email" placeholder="Your e-mail" />
						<Input type="text" placeholder="Your message" />
						<div>
							<Input type="text" placeholder="Your name" />
							<Input type="email" placeholder="Your e-mail" />
							<Input type="text" placeholder="Your message" />
							<div className={styles.btnContainer}>
								<Button text="Contact Us" />
							</div>
						</div>
					</div>
				</Col>
			</Row>
		</Grid>
	)
}

export default Contactpage
