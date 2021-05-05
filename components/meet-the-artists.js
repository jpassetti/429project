import Container from "./container"
import Section from './section'
import Row from './row'
import Col from './col'
import CTA from "./cta";
import CTAGroup from "./cta-group"

export default function MeetTheArtists() {
	return (
		<Section textAlignCenter>
			<Container>
				<Row>
					<Col>
						<h2>The journey doesn't here here.</h2>
						<CTAGroup justifyContentCenter>
							<CTA label="Meet the artists" type="primary" linkTo="/meet-the-artists" />
						</CTAGroup>
					</Col>
				</Row>
			</Container>
		</Section>
	)
}
