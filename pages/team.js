import Head from 'next/head'
import Layout from '../components/layout'
import Heading from '../components/Heading'
import Section from '../components/section'
import TeamSection from '../components/TeamSection'

const TeamPage = () => {
	return <Layout>
		<Head>
			<title>Team | The 429 Project</title>
			<meta name="description" content="Our incredible team that helped produce the project." />
		</Head>
		<Section>
			<Heading level="1" marginBottom="4">Team</Heading>
		<TeamSection />
		</Section>
	</Layout>
}
export default TeamPage
