import Col from './col'
import CTA from "./cta";
import CTAGroup from "./cta-group"
import Heading from './Heading'
import Section from './section'
import Row from './row'


export default function MeetTheArtists() {
	return (
		<Section textAlignCenter>
			
				<Row>
					<Col>
						<Heading level="2" textTransform="none">The journey doesn't here here.</Heading>
						<CTAGroup justifyContentCenter>
							<CTA label="Meet the artists" type="primary" linkTo="/artists" />
						</CTAGroup>
					</Col>
				</Row>
			
		</Section>
	)
}
