import Layout from '../components/layout'
import Col from '../components/col'
import Heading from '../components/Heading'
import Paragraph from '../components/Paragraph'
import Row from '../components/row'
import Section from '../components/section'

import { getAboutPage } from '../lib/api'
import TeamSection from '../components/TeamSection'

export async function getStaticProps() {
	const pageData = await getAboutPage('about')
	return {
		props: {
			pageData
		}
	}
}

export default function About({pageData}) {
	const {title, content} = pageData;
	return (
		<Layout>
			<Section className="row align-items-center justify-content-center">
				<Row>
					<Col sm="8">
					<Heading level="1">{title}</Heading>
						<Paragraph>May 14, 2021, the last day of the spring 2021 semester, marks 429 days since the World Health Organization declared COVID-19 a pandemic on March 11, 2020. From monthlong quarantines to mask mandates, from losing loved ones to a shaken sense of stability, from struggling with our physical health to mental health to emotional health, the virus has interrupted the way we interact with the people around us. As we go through the motions of this new way of life, we wait, hoping to “return to normal.” But the pandemic has transformed our world forever.</Paragraph>

						<Paragraph>The Rev. Brian Konkol offered his perspective by saying, “Throughout this pandemic we are both broken and beautiful. But this isn’t 50/50. We are both 100% broken and 100% beautiful. “ The effects of being broken are all around us. Over half of the students working on this project have learned first hand to challenges of having COVID, some contributed to this project while in isolation. Many lost family members and friends. But still, this project brought us together through virtual video, masks and 6-foot restrictions because we were on a quest for the beautiful.</Paragraph>

						<Paragraph>Throughout these 429 days, graphic design and photography students in the Visual Communications program at the S.I. Newhouse School of Public Communications at Syracuse University continued to create. A collection of their work is held forever in the following pages. They used the many emotions that the pandemic aroused in them to fuel their work, and in the midst of hardship and transition, they remained dedicated to their craft. This pandemic has been different for everyone. Everyone has their own story and their own perspective. They are all important.</Paragraph>

						<Paragraph>When the world as they knew it transformed before their eyes, students’ plans for classes, graduation and careers were altered. They adapted as they relearned how to connect, value their health and move forward. Students sought to balance all the broken they feel with something beautiful in coming together and sharing their vision and work as a community. The 429 Project is a compilation of how students spent the first 429 days of COVID, and how they discovered creativity through the pandemic.
						</Paragraph>
					</Col>
				</Row>
			<Heading level="2">Team</Heading>
			<TeamSection />
			</Section>	
		</Layout>
	)
}
