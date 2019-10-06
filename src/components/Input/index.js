import React from 'react'
import PropTypes from 'prop-types'

import styles from './Input.module.scss'

/**
* @author martincserep
* @function Input
* */

const Input = props => {
	const { type, placeholder, name, className } = props
	return (
		<input type={type} placeholder={placeholder} name={name} className={className} />
	)
}

Input.defaultProps = {
	className: styles.mainInput,
}

Input.propTypes = {
	className: PropTypes.string,
	name: PropTypes.string.isRequired,
	placeholder: PropTypes.string.isRequired,
	type: PropTypes.string.isRequired,
}

export default Input
