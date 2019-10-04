import React, { useState } from 'react'
import PropTypes from 'prop-types'

import styles from './MenuItem.module.scss'

/**
* @author martincserep, zilahir
* @function MenuItem
* */

const MenuItem = props => {
	const { label } = props
	const [hovered, setHovered] = useState(false)
	const toggleHover = () => setHovered(!hovered)

	return (
		<li
			className={`${styles.menuItem} ${hovered ? styles.hoverOn : styles.hoverOff}`}
			onMouseEnter={() => toggleHover()}
			onMouseLeave={() => toggleHover()}
		>
			{label}
		</li>
	)
}

MenuItem.propTypes = {
	label: PropTypes.string.isRequired,
}

export default MenuItem
