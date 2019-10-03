import React from 'react'
// import { useStore } from 'react-redux'

import TopHeader from '../../components/TopHeader'
import Footer from '../../components/Footer'
// import styles from './Home.module.scss'

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
			<TopHeader />
			<Footer />
		</>
	)
}

export default Homepage
