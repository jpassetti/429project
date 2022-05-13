//react
import * as Scroll from 'react-scroll';
//import { SRLWrapper, useLightbox } from 'simple-react-lightbox-pro'


// next.js components
import Image from 'next/image'

// custom components
import ButtonUI from './button-ui'
import Col from './col'
import CTA from './cta'
import CTAGroup from './cta-group'
import Frame from './frame'
import Heading from './Heading'
import Paragraph from './Paragraph'
import Row from './row'
import Section from './section'





let ScrollLink = Scroll.Link
let scroll = Scroll.animateScroll

export default function HomeIntro() {
	//const { openLightbox, closeLightbox } = useLightbox()
	const videoElement =[{
			src: "https://www.youtube.com/watch?v=rmDGVIMoVgo",
			caption: 'Project overview',
			autoplay: true,
			showControls: true
	}]
	const options = {
		thumbnails: {
			showThumbnails: false,
		},
		buttons: {
			showDownloadButton: false,
			showAutoplayButton: false,
		},
		icons: {
			closeIcon: 'images/icons/icon-close.svg',
			fullscreenIcon: null,
			nextIcon: 'images/icons/icon-angle-right.svg',
			previousIcon: 'images/icons/icon-angle-left.svg',
		},
		caption: {
			captionColor: '#FFFFFF',
			captionFontFamily: 'Arial',
			showCaption: true
		}
	}
	
	return <Section>
		<Row>
			<Col lg={5}>
				<Heading level="1">Creativity through paused</Heading>
				<Heading level="2" dek>429 days. 128 projects.</Heading>
				<Paragraph>When the world hit pause, so did our plans for classes, graduation, and careers. We learned to connect, to value our own health, and to continue moving forward. We continued to create.</Paragraph>

				<Paragraph>This is the story of how we spent the last 429 days, and how we created our own path within the pause. This is the 429 project.</Paragraph>
				<CTAGroup>
					<CTA scrollTo="cherish" label="See the work" type="primary" />
					<CTA linkTo="/about" label="About 429" type="secondary" />
				</CTAGroup>
				
			</Col>
			<Col lg={7}>
				<Image
					src="/images/429ExplainerThumbnail.jpg"
					alt="About video"
					width={1920}
					height={1080}
					onClick={() => { openLightbox() }}
				/>
				{/*<Frame type="video" clickHandler={() => { openLightbox() }}>
					<Image
						src="/images/429ExplainerThumbnail.jpg"
						alt="About video"
						width={1920}
						height={1080}
						onClick={() => { openLightbox() }}
					/>
</Frame>*/}
				{/*<SRLWrapper elements={videoElement} options={options} />*/}
				{/*<ScrollLink activeClass="active" to="reform" spy={true} smooth={true} duration={500}><ButtonUI type="angle-down" /></ScrollLink>*/}
			</Col>
		</Row>
	</Section>
}
