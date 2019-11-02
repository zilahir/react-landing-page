/* eslint-disable no-unused-vars */
import React from 'react'
import PropTypes from 'prop-types'
import { useMediaQuery } from 'react-responsive'
import { ParallaxProvider, Parallax } from 'react-scroll-parallax'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import { FiLinkedin } from 'react-icons/fi/'

import styles from './TeamMember.module.scss'

/**
* @author martincserep
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
		background-color: #5abd79;
		filter: blur(46px);
		opacity: .4;
	}
	position: relative;
	background-image: url(${props => props.image});
`

const TeamMember = props => {
	const { image, name, roleText, lnUrl, bio, parallaxY } = props
	const isTabletOrMobile = useMediaQuery({ query: '(max-width: 1224px)' })
	const isTabletOrMobileDevice = useMediaQuery({
		query: '(max-device-width: 1224px)',
	})
	// console.debug('parallaxY', parallaxY)
	return (
		<ParallaxProvider>
			<Parallax
				disabled={isTabletOrMobile && isTabletOrMobileDevice}
				y={parallaxY}
			>
				<div className={styles.teamMemberWrapper}>
					<MemberPofile
						className={styles.memberProfile}
						image={image}
					/>
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
			</Parallax>
		</ParallaxProvider>
	)
}

TeamMember.defaultProps = {
	bio: 'Sample bio text',
	parallaxY: [],
}

TeamMember.propTypes = {
	bio: PropTypes.string,
	image: PropTypes.string.isRequired,
	lnUrl: PropTypes.string.isRequired,
	name: PropTypes.string.isRequired,
	parallaxY: PropTypes.arrayOf(PropTypes.number),
	roleText: PropTypes.string.isRequired,
}

export default TeamMember
