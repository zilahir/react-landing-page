import React from 'react'
import PropTypes from 'prop-types'

/**
* @author martincserep
* @function MenuItem
* */

const MenuItem = props => {
	const { label } = props
	return (
		<li>
			{label}
		</li>
	)
}


MenuItem.propTypes = {
	label: PropTypes.string.isRequired,
}

export default MenuItem
