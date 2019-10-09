import React from 'react'
import { Grid, Row, Col } from 'react-flexbox-grid'

import TopHeader from '../../components/TopHeader'
import Section from '../../components/common/Section'
import HeaderH1 from '../../components/common/HeaderH1'
import HeaderH2 from '../../components/common/HeaderH2'
import Paragraph from '../../components/common/Paragraph'
import TeamMember from '../../components/common/TeamMember'
import Image from '../../components/common/Image'
import Maps from '../../components/Map'
import GirlsEatingOut from '../../assets/img/girls_eating.png'
import DownArrow from '../../components/common/Svg/index'
import styles from './About.module.scss'
import Sami from '../../assets/img/team/sami.jpg'
import Richi from '../../assets/img/team/rzilahi.jpg'
import Yuliya from '../../assets/img/team/yuliya.jpg'

/**
* @author
* @function About
* */

const About = () => {
	const Team = [Sami, Richi, Yuliya]
	return (
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
							<div className={styles.arrowContainer}>
								<DownArrow />
							</div>
						</Section>
					</div>
				</Col>
			</Row>
			<Row>
				<Col lg={12} xs={12}>
					<div className={styles.aboutusContainer}>
						<Section
							imagePos="right"
							leftLg={3}
							rightLg={5}
							textContainer={styles.textContainer}
						>
							<HeaderH2 className={styles.subHeader} key="header" text="This is who we are" />
							<HeaderH1 text="Our story" />
							<Paragraph className={styles.paragraph} key="image" text="Veniam tempor exercitation consectetur deserunt esse excepteur elit adipisicing. Officia laboris id tempor aliquip ullamco ullamco amet ex occaecat est eiusmod. Magna nisi veniam eiusmod nostrud aliqua aliqua reprehenderit anim. Excepteur est cillum sunt deserunt nostrud laborum in dolor nostrud ut Lorem nisi. Ut deserunt officia laborum proident ad qui consectetur dolore incididunt. Cupidatat nulla ea id irure labore consequat laboris cupidatat reprehenderit qui pariatur laboris magna." />
						</Section>
					</div>
				</Col>
			</Row>
			<Row>
				<Col lg={12} xs={12}>
					<div className={`${styles.aboutusContainer} ${styles.teamMembersContainer}`}>
						<ul className={styles.teamList}>
							{
								Team.map(member => (
									<TeamMember
										image={member}
										name="Richard Zilahi"
										roleText="Lead Developer"
										lnUrl="#"
									/>
								))
							}
						</ul>
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
}

export default About
