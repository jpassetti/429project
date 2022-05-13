import Layout from '../components/layout'
import Heading from '../components/Heading'
import Section from '../components/section'
import TeamSection from '../components/TeamSection'

const TeamPage = () => {
	return <Layout>
		<Section>
			<Heading level="1" marginBottom="4">Team</Heading>
		<TeamSection />
		</Section>
	</Layout>
}
export default TeamPage
