import React from 'react'
import { useStore } from 'react-redux'

import styles from './Home.module.scss'

/**
* @author zilahir
* @function Homepage
* */

const Homepage = () => {
	const store = useStore()
	const { test } = store.getState()

	return (
		<div className={styles.homePageWrapper}>
			<p>
				Homepage
			</p>
			<p>
				the test reducer value is <code>{test.testItem}</code>
			</p>
		</div>
	)
}

export default Homepage
