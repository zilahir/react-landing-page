import React from 'react'
import PropTypes from 'prop-types'

/**
* @author martincserep
* @function MenuItem
* */

const MenuItem = label => {
	const { text } = label
	return (
		<li>
			{text}
		</li>
	)
}


MenuItem.labelType = {
	text: PropTypes.string.isRequired,
}

export default MenuItem
