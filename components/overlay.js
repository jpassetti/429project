// react
import { useContext } from 'react'

// next.js components
import Image from 'next/image'

// custom components
import ButtonUI from './button-ui'
import Container from './container'
import Row from './row'
import Col from './col'

// styles
import styles from './overlay.module.scss'

import {
	OverlayDisplayContext, OverlayContentContext
} from '../context/overlay';

export default function Overlay() {
	const [isOverlayVisible, setOverlayVisible] = useContext(OverlayDisplayContext);
	const [overlayContent, setOverlayContent] = useContext(OverlayContentContext);

	const { title, featuredImage, relatedArtist, content} = overlayContent;

	const { relatedProjectArtist } = relatedArtist;
	

	return <div className={styles.overlay}>
		<ButtonUI type="close" id="overlay_closeBtn" clickHandler={() => { setOverlayVisible(false) }} />
			<Container>
				<Row alignItemsCenter>
					<Col lg={8}>
						<Image
							src={featuredImage.node.sourceUrl}
							alt={featuredImage.node.altText}
							width={featuredImage.node.mediaDetails.width}
							height={featuredImage.node.mediaDetails.height}
						/>
					</Col>
					<Col lg={4}>
					{relatedProjectArtist ? (
						<h4>{relatedProjectArtist[0].title} <span className="pipe">|</span> <span className="title">{title}</span></h4>
					) : (
						<h4><span className="title">{title}</span></h4>
					)}
					{content &&
						<div dangerouslySetInnerHTML={{ __html: content }}></div>
					}
					</Col>
				</Row>
			</Container>
		</div>
}
