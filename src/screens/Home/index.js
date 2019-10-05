import React, { useState, useEffect } from 'react'
// import { useStore } from 'react-redux'
import { Grid } from 'react-flexbox-grid'


import TopHeader from '../../components/TopHeader'
import Footer from '../../components/Footer'
import Section from '../../components/common/Section'
import HeaderH1 from '../../components/common/HeaderH1'
import Paragraph from '../../components/common/Paragraph'
import Image from '../../components/common/Image'
import styles from './Home.module.scss'
import Image1 from '../../assets/img/girl_on_phone.jpg'
import Testimonials from '../../components/Testimonials/testimonials'
import Phone from '../../components/common/phone'
import Image2 from '../../assets/img/girl_reading_menu.jpg'
// import Image3 from '../../assets/img/phone_and_food.jpg'
import purpleImages from '../../assets/img/misc/pruple_dots.svg'


/**
* @author zilahir
* @function Homepage
* */

// eslint-disable-next-line arrow-body-style
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
				style={{ padding: 0 }}
			>
				<TopHeader />
				<div className={styles.sectionContainer}>
					<Section
						imagePos="right"
						hero
					>
						<HeaderH1 key="header" text="helloo" />
						<Paragraph key="p" text="Exercitation pariatur fugiat incididunt esse consequat officia ut dolore. Voluptate ad nisi et fugiat reprehenderit cupidatat ipsum commodo proident veniam veniam ipsum magna et. Amet ipsum adipisicing adipisicing nostrud id culpa velit. Velit aliqua voluptate cillum ea nulla cillum eu exercitation laborum velit cupidatat mollit." />
						<Image secondaryImage={purpleImages} key="image" src={Image1} maxWidth={400} alt="phone" />
					</Section>
				</div>
				<div className={styles.testimonalContainer}>
					<Section>
						<Testimonials />
					</Section>
				</div>
				<div className={styles.sectionContainer}>
					<Section>
						<HeaderH1 key="header" text="lorem ipsum" />
						<Paragraph key="p" text="Exercitation pariatur fugiat incididunt esse consequat officia ut dolore. Voluptate ad nisi et fugiat reprehenderit cupidatat ipsum commodo proident veniam veniam ipsum magna et. Amet ipsum adipisicing adipisicing nostrud id culpa velit. Velit aliqua voluptate cillum ea nulla cillum eu exercitation laborum velit cupidatat mollit." />
						<Phone key="image">
							<div style={{
								backgroundImage: `url(${Image2})`,
								width: '100%',
								height: '100%',
								backgroundSize: 'cover',
								backgroundPosition: '50% 50%',
							}}
							/>
						</Phone>
					</Section>
				</div>
				<Footer />
			</Grid>
		</>
	)
}

export default Homepage
