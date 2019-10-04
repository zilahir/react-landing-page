import React from 'react'
import PropTypes from 'prop-types'

import styles from './Paragraph.module.scss'

/**
* @author
* @function Paragraph
* */

const Paragraph = props => {
	const { text, className } = props
	return (
		<p className={className}>
			{text}
		</p>
	)
}

Paragraph.defaultProps = {
	className: styles.paragraph,
}

Paragraph.propTypes = {
	className: PropTypes.string,
	text: PropTypes.string.isRequired,
}


export default Paragraph
