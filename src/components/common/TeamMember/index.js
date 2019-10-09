/* eslint-disable no-unused-vars */
import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import { FiLinkedin } from 'react-icons/fi/'

import styles from './TeamMember.module.scss'

/**
* @author
* @function TeamMember
* */

const MemberPofile = styled.div`
	&:before {
		content: '';
		width: 180px;
		height: 180px;
		border: 1px solid #5abd79;
		position: absolute;
		top: -30px;
		left: 30px;
		z-index: -1;
	}
	position: relative;
	background-image: url(${props => props.image});
`

const TeamMember = props => {
	const { image, name, roleText, lnUrl, bio } = props
	return (
		<li className={styles.oneMember}>
			<div className={styles.teamMemberWrapper}>
				<MemberPofile className={styles.memberProfile} image={image} />
				<div className={styles.memberMeta}>
					<h6>
						{name}
					</h6>
					<p>
						{roleText}
					</p>
					<ul className={styles.linkList}>
						<li>
							<Link to={lnUrl}>
								<FiLinkedin size="1.5em" />
							</Link>
						</li>
					</ul>
				</div>
			</div>
		</li>
	)
}

TeamMember.propTypes = {
	bio: PropTypes.string.isRequired,
	image: PropTypes.string.isRequired,
	lnUrl: PropTypes.string.isRequired,
	name: PropTypes.string.isRequired,
	roleText: PropTypes.string.isRequired,
}

export default TeamMember
