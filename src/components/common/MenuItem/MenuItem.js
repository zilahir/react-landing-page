import React from 'react'
import PropTypes from 'prop-types'

/**
* @author martincserep
* @function MenuItem
* */

const MenuItem = props => {
	const { text } = props
	return (
		<li>
			{text}
		</li>
	)
}


MenuItem.propTypes = {
	text: PropTypes.string.isRequired,
}

export default MenuItem
