import React from 'react'
import {
	Accordion,
	AccordionItem,
	AccordionItemHeading,
	AccordionItemButton,
	AccordionItemPanel,
} from 'react-accessible-accordion'

import { jobs } from '../api/jobs'
import 'react-accessible-accordion/dist/fancy-example.css'
import HeaderH2 from '../common/HeaderH2'
import Paragraph from '../common/Paragraph'

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
							<HeaderH2 text={job.jobLocation} />
							<Paragraph text={job.jobDesc} />
						</AccordionItemPanel>
					</AccordionItem>
				))
			}
		</Accordion>
	)
}
