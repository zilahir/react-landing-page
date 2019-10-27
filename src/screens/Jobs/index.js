/* eslint-disable no-unused-vars */
import React from 'react'
import { Grid, Row, Col } from 'react-flexbox-grid'

import TopHeader from '../../components/TopHeader'
import Footer from '../../components/Footer'
import Section from '../../components/common/Section'
import HeaderH1 from '../../components/common/HeaderH1'
import HeaderH2 from '../../components/common/HeaderH2'
import Paragraph from '../../components/common/Paragraph'
import styles from './Jobs.module.scss'
import Screen1 from '../../assets/img/phonescreens/screen_1.png'
import GreyDots from '../../assets/img/misc/grey_dots.svg'
import AccordionList from '../../components/AccordionList'

/**
* @author martincserep
* @function Jobs
* */

const Jobs = () => (
	<Grid
		fluid
		className={styles.fluid}
	>
		<TopHeader />
		<HeaderH1 text="Work with us!" />
		<AccordionList />

		<Footer />
	</Grid>
)

export default Jobs
