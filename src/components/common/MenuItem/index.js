import React, { useState } from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'

import styles from './MenuItem.module.scss'

/**
* @author martincserep, zilahir
* @function MenuItem
* */

const MenuItem = props => {
	const { label, target } = props
	const [hovered, setHovered] = useState(false)
	const toggleHover = () => setHovered(!hovered)

	return (
		<li
			className={`${styles.menuItem} ${hovered ? styles.hoverOn : styles.hoverOff}`}
			onMouseEnter={() => toggleHover()}
			onMouseLeave={() => toggleHover()}
		>
			<Link to={target}>
				{label}
			</Link>
		</li>
	)
}

MenuItem.defaultProps = {
	target: '',
}

MenuItem.propTypes = {
	label: PropTypes.string.isRequired,
	target: PropTypes.string,
}

export default MenuItem
