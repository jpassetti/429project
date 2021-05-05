import Layout from '../components/layout'
import Container from '../components/container'
import Row from '../components/row'
import Col from '../components/col'
import Section from '../components/section'

export default function MeetTheArtists() {
	return (
		<Layout>
			<Section>
			<Container>
				<Row>
					<Col sm={8}>
						<h1>Meet the Artists</h1>
						<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam venenatis ligula vel massa ultricies tempor. Aliquam erat volutpat.</p>
					</Col>
				</Row>
			</Container>
			</Section>
		</Layout >
	)
}
