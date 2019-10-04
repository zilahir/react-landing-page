import React from 'react'
// import { useStore } from 'react-redux'
import { Grid } from 'styled-css-grid'

import TopHeader from '../../components/TopHeader'
import Footer from '../../components/Footer'
import Section from '../../components/common/Section'
import HeaderH1 from '../../components/common/HeaderH1'
import Paragraph from '../../components/common/Paragraph'
import styles from './Home.module.scss'

/**
* @author zilahir
* @function Homepage
* */

// eslint-disable-next-line arrow-body-style
const Homepage = () => {
	// const store = useStore()
	// const { test } = store.getState()

	return (
		<>
			<Grid columns={1} gap="40px">
				<TopHeader />
				<div className={styles.sectionContainer}>
					<Section imagePos="left">
						<HeaderH1 text="helloo" />
						<Paragraph text="Exercitation pariatur fugiat incididunt esse consequat officia ut dolore. Voluptate ad nisi et fugiat reprehenderit cupidatat ipsum commodo proident veniam veniam ipsum magna et. Amet ipsum adipisicing adipisicing nostrud id culpa velit. Velit aliqua voluptate cillum ea nulla cillum eu exercitation laborum velit cupidatat mollit." />
					</Section>
				</div>
				<Footer />
			</Grid>
		</>
	)
}

export default Homepage
