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
import Button from '../../components/common/Button'
import Chart from '../../components/common/Chart'

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
					<Col
						lg={12}
						xs={12}
					>
						<div className={styles.sectionContainer}>
							<Section
								imagePos="right"
								hero
								xsOffset={0}
								leftLg={3}
								rightLg={7}
							>
								<HeaderH2 className={styles.subHeader} key="header-top" text="lorem" />
								<HeaderH1 key="sub-header-top" text="helloo" />
								<Paragraph key="p-top" text="Exercitation pariatur fugiat incididunt esse consequat officia ut dolore. Voluptate ad nisi et fugiat reprehenderit cupidatat ipsum commodo proident veniam veniam ipsum magna et. Amet ipsum adipisicing adipisicing nostrud id culpa velit. Velit aliqua voluptate cillum ea nulla cillum eu exercitation laborum velit cupidatat mollit." />
								<Button
									text="Read more ⟶"
									onClick={() => null}
								/>
								<MacBook key="image-bottom">
									<Chart />
								</MacBook>
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
							<Section
								xsOffset={0}
							>
								<HeaderH1 key="header-bottom" text="lorem ipsum" />
								<Paragraph key="p" text="Exercitation pariatur fugiat incididunt esse consequat officia ut dolore. Voluptate ad nisi et fugiat reprehenderit cupidatat ipsum commodo proident veniam veniam ipsum magna et. Amet ipsum adipisicing adipisicing nostrud id culpa velit. Velit aliqua voluptate cillum ea nulla cillum eu exercitation laborum velit cupidatat mollit." />
								<Phone key="image-bottom">
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
