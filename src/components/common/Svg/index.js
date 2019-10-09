import React from 'react'
import PropTypes from 'prop-types'

/**
* @author zilahir
* @function SVG
* */

const DownArrow = props => {
	const { color } = props
	return (
		<svg width="14px" height="50px" viewBox="0 0 14 50" version="1.1">
			<g id="Arrow" stroke="none" strokeWidth="1" fill="none" fillRule="evenodd" strokeLinecap="square">
				<g transform="translate(2.000000, 1.000000)" id="Path" stroke={color} strokeWidth="2">
					<path d="M5,0 L5,40" />
					<polygon points="0 40 10 40 5 47" />
				</g>
			</g>
		</svg>
	)
}

DownArrow.defaultProps = {
	color: '#5abd79',
}

DownArrow.propTypes = {
	color: PropTypes.string,
}

export default DownArrow
