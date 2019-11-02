import React, { useState } from 'react'
import {
	Accordion,
	AccordionItem,
	AccordionItemHeading,
	AccordionItemButton,
	AccordionItemPanel,
} from 'react-accessible-accordion'
import Icon from 'react-icons-kit'
import { mapPin, book, bookOpen } from 'react-icons-kit/feather'

import { jobs } from '../api/jobs'
import 'react-accessible-accordion/dist/fancy-example.css'
import HeaderH2 from '../common/HeaderH2'
import Paragraph from '../common/Paragraph'
import styles from './OpenJobs.module.scss'

/**
* @author martincserep
* @function Accordion
* */

const OpenJobs = () => {
	const [activeJob, setActivJob] = useState([])
	return (
		<Accordion
			className={styles.accordion}
			allowZeroExpanded
			onChange={id => setActivJob(id)}
		>
			{
				jobs.getJobs().map((job, index) => (
					<AccordionItem
						className={`${styles.item} ${index === activeJob[0] ? styles.jobIsOpen : ''}`}
						key={job.key}
					>
						<AccordionItemHeading
							className={styles.heading}
						>
							<AccordionItemButton
								className={styles.button}
							>
								<div
									className={styles.buttonIcon}
									style={{
										color: '#5abd79',
									}}
								>
									<Icon icon={index === activeJob[0] ? bookOpen : book} size="2em" />
									<HeaderH2 className={styles.title} text={job.jobTitle} />
								</div>
							</AccordionItemButton>
						</AccordionItemHeading>
						<AccordionItemPanel
							className={styles.panel}
						>
							<div
								className={styles.iconContainer}
								style={{
									color: '#5abd79',
								}}
							>
								<Icon icon={mapPin} size="2em" />
								<HeaderH2 className={styles.jobLocation} text={job.jobLocation} />
							</div>
							<Paragraph className={styles.jobDesc} text={job.jobDesc} />
						</AccordionItemPanel>
					</AccordionItem>
				))
			}
		</Accordion>
	)
}

export default OpenJobs
