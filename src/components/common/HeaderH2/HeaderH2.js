import React from 'react'
import PropTypes from 'prop-types'

/**
* @author martincserep
* @function Header
* */

const HeaderH2 = props => {
	const { text, className } = props
	return (
		<h1 className={className}>
			{text}
		</h1>
	)
}

HeaderH2.defaultProps = {
	className: null,
}

HeaderH2.propTypes = {
	className: PropTypes.string,
	text: PropTypes.string.isRequired,
}

export default HeaderH2
