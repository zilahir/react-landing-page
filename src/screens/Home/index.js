import React, { useState, useEffect } from 'react'
// import { useStore } from 'react-redux'
import { Grid, Row, Col } from 'react-flexbox-grid'

import TopHeader from '../../components/TopHeader'
import Footer from '../../components/Footer'
import Section from '../../components/common/Section'
import HeaderH1 from '../../components/common/HeaderH1'
import Paragraph from '../../components/common/Paragraph'
import styles from './Home.module.scss'
import Testimonials from '../../components/Testimonials/testimonials'
import Phone from '../../components/common/phone'
import Screen2 from '../../assets/img/phonescreens/screen_2.png'
// import purpleImages from '../../assets/img/misc/pruple_dots.svg'
import HeaderH2 from '../../components/common/HeaderH2'
import MacBook from '../../components/common/MacBook'


/**
* @author zilahir,martincserep
* @function Homepage
* */

const Homepage = () => {
	// const store = useStore()
	// const { test } = store.getState()
	const [isPageLoaded, setIsPageLoaded] = useState(false)

	useEffect(() => {
		setIsPageLoaded(true)
	}, [isPageLoaded])

	return (
		<>
			<Grid
				fluid
				className={styles.fluid}
			>
				<TopHeader />
				<Row>
					<Col lg={12} xs={12}>
						<div className={styles.sectionContainer}>
							<Section
								imagePos="right"
								hero
								xsOffset={0}
								leftLg={3}
								rightLg={6}
								inlineStyle={{
									padding: '40px 0px',
								}}
							>
								<HeaderH2 className={styles.subHeader} key="header" text="lorem" />
								<HeaderH1 key="header" text="helloo" />
								<Paragraph key="p" text="Exercitation pariatur fugiat incididunt esse consequat officia ut dolore. Voluptate ad nisi et fugiat reprehenderit cupidatat ipsum commodo proident veniam veniam ipsum magna et. Amet ipsum adipisicing adipisicing nostrud id culpa velit. Velit aliqua voluptate cillum ea nulla cillum eu exercitation laborum velit cupidatat mollit." />
								<MacBook key="image" />
							</Section>
						</div>
					</Col>
				</Row>
				<Row>
					<Col lg={10} xs={12} lgOffset={1}>
						<div className={styles.testimonalContainer}>
							<HeaderH2 className={styles.subHeader} text="Team up with us!" />
							<HeaderH1 text="Our partners" />
							<Testimonials />
						</div>
					</Col>
				</Row>
				<Row>
					<Col lg={12} xs={12}>
						<div className={styles.sectionContainer}>
							<Section>
								<HeaderH1 key="header" text="lorem ipsum" />
								<Paragraph key="p" text="Exercitation pariatur fugiat incididunt esse consequat officia ut dolore. Voluptate ad nisi et fugiat reprehenderit cupidatat ipsum commodo proident veniam veniam ipsum magna et. Amet ipsum adipisicing adipisicing nostrud id culpa velit. Velit aliqua voluptate cillum ea nulla cillum eu exercitation laborum velit cupidatat mollit." />
								<Phone key="image">
									<div style={{
										backgroundImage: `url(${Screen2})`,
										width: '100%',
										height: '100%',
										backgroundSize: 'cover',
										backgroundPosition: '50% 50%',
									}}
									/>
								</Phone>
							</Section>
						</div>
					</Col>
				</Row>
				<Footer />
			</Grid>
		</>
	)
}

export default Homepage
