import React from 'react'
import PropTypes from 'prop-types'

/**
* @author martincserep
* @function MenuItem
* */

const MenuItem = props => {
	const { text, className } = props
	return (
		<li className={className}>
			{text}
		</li>
	)
}

MenuItem.defaultProps = {
	className: null,
}

MenuItem.propTypes = {
	className: PropTypes.string,
	text: PropTypes.string.isRequired,
}

export default MenuItem
