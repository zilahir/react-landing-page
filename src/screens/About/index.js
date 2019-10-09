import React from 'react'
import { Grid, Row, Col } from 'react-flexbox-grid'

import TopHeader from '../../components/TopHeader'
import Section from '../../components/common/Section'
import HeaderH1 from '../../components/common/HeaderH1'
import HeaderH2 from '../../components/common/HeaderH2'
// import Paragraph from '../../components/common/Paragraph'
import Maps from '../../components/Map'
import styles from './About.module.scss'

/**
* @author
* @function About
* */

const About = () => (
	<Grid
		fluid
	>
		<TopHeader />
		<Row>
			<Col lg={12} xs={12}>
				<div className={styles.aboutusContainer}>
					<Section
						imagePos="right"
						hero
					>
						<HeaderH2 className={styles.subHeader} key="header" text="lorem" />
						<HeaderH1 key="header" text="Get to know us" />
					</Section>
				</div>
			</Col>
		</Row>
		<Row>
			<Col lg={12} xs={12}>
				<div className={styles.mapContainer}>
					<Maps />
				</div>
			</Col>
		</Row>
	</Grid>
)

export default About
