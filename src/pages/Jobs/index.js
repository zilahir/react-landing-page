/* eslint-disable no-unused-vars */
import React from 'react'
import { Grid, Row, Col } from 'react-flexbox-grid'

import TopHeader from '../../components/TopHeader'
import Footer from '../../components/Footer'
import HeaderH1 from '../../components/common/HeaderH1'
import styles from './Jobs.module.scss'
import OpenJobs from '../../components/OpenJobs'

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
		<div className={styles.headerContainer}>
			<Row>
				<Col
					lg={10}
					lgOffset={1}
				>
					<HeaderH1 text="Work with us!" />
				</Col>
			</Row>
		</div>
		<Row
			center="lg"
		>
			<Col lg={8}>
				<OpenJobs />
			</Col>
		</Row>

		<Footer />
	</Grid>
)

export default Jobs
