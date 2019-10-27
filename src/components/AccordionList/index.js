import React from 'react'
import {
	Accordion,
	AccordionItem,
	AccordionItemHeading,
	AccordionItemButton,
	AccordionItemPanel,
} from 'react-accessible-accordion'

import { jobs } from '../api/jobs'

// import 'react-accessible-accordion/dist/fancy-example.css'

/**
* @author martincserep
* @function Accordion
* */

export default function AccordionList() {
	return (
		<Accordion>
			{
				jobs.getJobs().map(job => (
					<AccordionItem>
						<AccordionItemHeading>
							<AccordionItemButton>
								{job.jobTitle}
							</AccordionItemButton>
						</AccordionItemHeading>
						<AccordionItemPanel>
							<p>
								{job.jobLocation}
							</p>
							<p>
								{job.jobDesc}
							</p>
						</AccordionItemPanel>
					</AccordionItem>
				))
			}
		</Accordion>
	)
}
