import * as Scroll from 'react-scroll';

import Section from './section'
import CTAGroup from './cta-group'
import CTA from './cta'
import Image from 'next/image'
import ButtonUI from './button-ui'

let ScrollLink = Scroll.Link
let scroll = Scroll.animateScroll

export default function HomeIntro() {
	return <Section className="row align-items-center">
		<div className="row">
			<div className="col col--md--5">
				<h1>Creativity through pause</h1>
				<h2 className="dek">429 days. 128 projects.</h2>
				<p>When the world hit pause, so did our plans for classes, graduation, and careers. We learned to connect, to value our own health, and to continue moving forward. We continued to create.</p>

				<p>This is the story of how we spent the last 429 days, and how we created our own path within the pause. This is the 429 project.</p>
				<CTAGroup>
					<CTA linkTo="/" label="See the work" type="primary" />
					<CTA linkTo="/about" label="About 429" type="secondary" />
				</CTAGroup>
				
			</div>
			<div className="col col--md--7">
				<Image
					src="/images/429ExplainerThumbnail.jpg"
					alt="About video"
					width={1920}
					height={1080}
				/>
				<ScrollLink activeClass="active" to="reform" spy={true} smooth={true} duration={500}><ButtonUI icon="down" /></ScrollLink>
				
			</div>
		</div>
	</Section>
}
