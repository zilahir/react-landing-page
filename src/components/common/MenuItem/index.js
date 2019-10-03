import React from 'react'
import PropTypes from 'prop-types'

import styles from './MenuItem.module.scss'

/**
* @author martincserep
* @function MenuItem
* */

const MenuItem = props => {
	const { label } = props
	return (
		<li className={styles.menuItem}>
			{label}
		</li>
	)
}


MenuItem.propTypes = {
	label: PropTypes.string.isRequired,
}

export default MenuItem
