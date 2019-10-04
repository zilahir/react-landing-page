import React from 'react'
import PropTypes from 'prop-types'

import styles from './Button.module.scss'

/**
* @author martincserep
* @function Header
* */

const Button = props => {
	const { text } = props
	return (
		<button className={styles} type="button">
			{text}
		</button>
	)
}


Button.propTypes = {
	text: PropTypes.string.isRequired,
}

export default Button
