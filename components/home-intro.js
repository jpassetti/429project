//react
import * as Scroll from 'react-scroll';

// next.js components
import Image from 'next/image'

// custom components
import Section from './section'
import CTAGroup from './cta-group'
import CTA from './cta'
import ButtonUI from './button-ui'
import Row from './row'
import Col from './col'

let ScrollLink = Scroll.Link
let scroll = Scroll.animateScroll

export default function HomeIntro() {
	return <Section>
		<Row>
			<Col lg={5}>
				<h1>Creativity through paused</h1>
				<h2 className="dek">429 days. 128 projects.</h2>
				<p>When the world hit pause, so did our plans for classes, graduation, and careers. We learned to connect, to value our own health, and to continue moving forward. We continued to create.</p>

				<p>This is the story of how we spent the last 429 days, and how we created our own path within the pause. This is the 429 project.</p>
				<CTAGroup>
					<CTA scrollTo="reform" label="See the work" type="primary" />
					<CTA linkTo="/about" label="About 429" type="secondary" />
				</CTAGroup>
				
			</Col>
			<Col lg={7}>
				<Image
					src="/images/429ExplainerThumbnail.jpg"
					alt="About video"
					width={1920}
					height={1080}
				/>
				<ScrollLink activeClass="active" to="reform" spy={true} smooth={true} duration={500}><ButtonUI type="angle-down" /></ScrollLink>
			</Col>
		</Row>
	</Section>
}
