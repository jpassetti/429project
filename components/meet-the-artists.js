import Container from "./container";
import CTA from "./cta";
import CTAGroup from "./cta-group";

export default function MeetTheArtists() {
	return (
		<Container>
			<h2>Meet the artists</h2>
			<CTAGroup>
				<CTA label="Meet the Artists" type="primary" linkTo="/meet-the-artists" />
			</CTAGroup>
		</Container>
	)
}
