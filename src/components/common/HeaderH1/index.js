import React from 'react'
import PropTypes from 'prop-types'

import styles from './HeaderH1.module.scss'

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
	className: styles.mainH1,
}

HeaderH1.propTypes = {
	className: PropTypes.string,
	text: PropTypes.string.isRequired,
}

export default HeaderH1
