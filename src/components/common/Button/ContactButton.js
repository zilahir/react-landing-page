import React from 'react'
import PropTypes from 'prop-types'

import styles from './ContactButton.module.scss'

/**
* @author martincserep
* @function Header
* */

const ContactButton = props => {
	const { text } = props
	return (
		<button className={styles} type="button">
			{text}
		</button>
	)
}


ContactButton.propTypes = {
	text: PropTypes.string.isRequired,
}

export default ContactButton
