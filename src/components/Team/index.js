/* eslint-disable react/no-array-index-key */
import React from 'react'
import { motion, useAnimation } from 'framer-motion'

import TeamMember from '../common/TeamMember'
import styles from './Team.module.scss'
import Sami from '../../assets/img/team/sami.jpg'
import Richi from '../../assets/img/team/rzilahi.jpg'
import Yuliya from '../../assets/img/team/yuliya.jpg'

/**
* @author zilahir
* @function Team
* */

const Team = () => {
	const TeamMembers = [Sami, Richi, Yuliya]

	const variants = {
		visible: i => ({
			opacity: 1,
			transition: {
				delay: i * 0.3,
			},
		}),
		hidden: { opacity: 0 },
	}
	const container = {
		hidden: { opacity: 1, scale: 1 },
		visible: {
			opacity: 1,
			scale: 1,
			transition: {
				delay: 0.3,
				when: 'beforeChildren',
				staggerChildren: 0.1,
			},
		},
	}
	const controls = useAnimation()

	const PARALLAX_Y = [
		[10, -10],
		[-20, 20],
	]

	/* function fadeIn() {
		controls.start('visible')
	} */

	controls.start('visible')
	return (
		<div
			className={styles.teamMembersContainer}
		>
			<motion.ul
				className={styles.teamList}
				variants={container}
				initial="hidden"
				animate={controls}
			>
				{
					TeamMembers.map((member, i) => (
						<motion.li
							custom={i}
							key={i}
							animate={controls}
							variants={variants}
						>
							<TeamMember
								image={member}
								name="Richard Zilahi"
								roleText="Lead Developer"
								lnUrl="#"
								ind={i}
								parallaxY={i % 2 === 0 ? PARALLAX_Y[0] : PARALLAX_Y[1]}
							/>
						</motion.li>
					))
				}
			</motion.ul>
		</div>
	)
}


export default Team
