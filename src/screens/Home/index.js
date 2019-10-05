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
// import Image2 from '../../assets/img/girl_reading_menu.jpg'
// import Image3 from '../../assets/img/phone_and_food.jpg'

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
			<Grid fluid>
				<TopHeader />
				<div className={styles.sectionContainer}>
					{
						isPageLoaded
							? (
								<Section imagePos="left">
									<HeaderH1 key="header" text="helloo" />
									<Paragraph key="p" text="Exercitation pariatur fugiat incididunt esse consequat officia ut dolore. Voluptate ad nisi et fugiat reprehenderit cupidatat ipsum commodo proident veniam veniam ipsum magna et. Amet ipsum adipisicing adipisicing nostrud id culpa velit. Velit aliqua voluptate cillum ea nulla cillum eu exercitation laborum velit cupidatat mollit." />
									<Image key="image" src={Image1} maxWidth={400} alt="phone" />
								</Section>
							)
							: null
					}
				</div>
				<div className={styles.testimonalContainer}>
					<Testimonials />
				</div>
				<Footer />
			</Grid>
		</>
	)
}

export default Homepage
