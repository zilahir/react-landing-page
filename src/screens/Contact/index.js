import React from 'react'
import { Grid } from 'react-flexbox-grid'

import styles from './Contact.module.scss'
import Input from '../../components/Input'
import TopHeader from '../../components/TopHeader'
import Button from '../../components/common/Button'
import HeaderH1 from '../../components/common/HeaderH1'
import Section from '../../components/common/Section'


/**
* @author martincserep
* @function Contactpage
* */

// eslint-disable-next-line arrow-body-style
const Contactpage = () => {
	return (
		<Grid
			fluid
			style={{ padding: 0 }}
		>
			<TopHeader />
			<Section
				imagePos="right"
				hero
			>
				<HeaderH1 key="header" text="Contact us" />
				<div className={styles.form}>
					<Input type="text" placeholder="Your name" />
					<Input type="email" placeholder="Your e-mail" />
					<Input type="text" placeholder="Your message" />
					<Button text="Contact Us" />
				</div>
			</Section>
		</Grid>
	)
}

export default Contactpage
