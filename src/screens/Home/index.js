import React from 'react'
// import { useStore } from 'react-redux'
import { Grid } from 'styled-css-grid'

import TopHeader from '../../components/TopHeader'
import Footer from '../../components/Footer'
import Section from '../../components/common/Section'
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
					<Section />
				</div>
				<Footer />
			</Grid>
		</>
	)
}

export default Homepage
