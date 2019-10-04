import React from 'react'
import PropTypes from 'prop-types'

/**
* @author zilahir
* @function Header
* */

const HeaderH1 = props => {
	const { text, className } = props
	return (
		<h1 className={className}>
			{text}
		</h1>
	)
}

HeaderH1.defaultProps = {
	className: '',
}

HeaderH1.propTypes = {
	className: PropTypes.string,
	text: PropTypes.string.isRequired,
}

export default HeaderH1
