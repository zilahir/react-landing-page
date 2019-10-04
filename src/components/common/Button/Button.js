import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

import styles from './Button.module.scss'

/**
* @author martincserep
* @function Header
* */

const Btn = styled.button`
	background-color: ${props => props.bgColor};
`

const Button = props => {
	const { text, bgColor, className, onClick } = props
	return (
		<Btn className={className} bgColor={bgColor} onClick={onClick} type="button">
			{text}
		</Btn>
	)
}

Button.defaultProps = {
	bgColor: '#5abd79',
	className: styles.defaultButton,
}


Button.propTypes = {
	bgColor: PropTypes.string,
	className: PropTypes.string,
	onClick: PropTypes.func.isRequired,
	text: PropTypes.string.isRequired,
}

export default Button
