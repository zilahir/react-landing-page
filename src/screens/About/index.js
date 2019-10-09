import React from 'react'
import { Grid, Row, Col } from 'react-flexbox-grid'

import TopHeader from '../../components/TopHeader'
import Section from '../../components/common/Section'
import HeaderH1 from '../../components/common/HeaderH1'
import HeaderH2 from '../../components/common/HeaderH2'
import Paragraph from '../../components/common/Paragraph'
import Image from '../../components/common/Image'
import Maps from '../../components/Map'
import GirlsEatingOut from '../../assets/img/girls_eating.png'
import DownArrow from '../../components/common/Svg/index'
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
						imagePos="left"
						hero
					>
						<HeaderH2 className={styles.subHeader} key="header" text="lorem" />
						<HeaderH1 key="header" text="Get to know us" />
						<Paragraph text="Veniam tempor exercitation consectetur deserunt esse excepteur elit adipisicing. Officia laboris id tempor aliquip ullamco ullamco amet ex occaecat est eiusmod. Magna nisi veniam eiusmod nostrud aliqua aliqua reprehenderit anim. Excepteur est cillum sunt deserunt nostrud laborum in dolor nostrud ut Lorem nisi. Ut deserunt officia laborum proident ad qui consectetur dolore incididunt. Cupidatat nulla ea id irure labore consequat laboris cupidatat reprehenderit qui pariatur laboris magna." />
						<Image maxWidth={600} key="image" alt="eating out" src={GirlsEatingOut} />
						<DownArrow />
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
