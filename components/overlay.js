// react
import { useContext } from 'react'
import { SRLWrapper, useLightbox } from 'simple-react-lightbox-pro'

// next.js components
import Image from 'next/image'

// custom components
import ButtonUI from './button-ui'
import Container from './container'
import Row from './row'
import Col from './col'
import Frame from './frame'

// styles
import styles from './overlay.module.scss'

import {
	OverlayDisplayContext, OverlayContentContext
} from '../context/overlay';

export default function Overlay() {
	const [isOverlayVisible, setOverlayVisible] = useContext(OverlayDisplayContext);
	const [overlayContent, setOverlayContent] = useContext(OverlayContentContext);

	const { id,
        content,
        title,
        excerpt,
        slug,
		featuredImage, 
		relatedArtist,
		projectInformation
	} = overlayContent;

	const { relatedProjectArtist } = relatedArtist;
	const { photoGallery, video } = projectInformation;
	
	const { openLightbox, closeLightbox } = useLightbox()

	const elements = []

	if (photoGallery) {
		photoGallery.forEach(photoGalleryItem => {
			const { slide } = photoGalleryItem;
			elements.push({
				src: slide.sourceUrl,
				caption: slide.altText,
				width: slide.mediaDetails.width,
				height: slide.mediaDetails.height
			});
		})
	}
	const videoElement = []
	if (video) {
		videoElement.push({
			src: video,
			caption: 'Vimeo video',
			autoplay: true,
			showControls: true
		})
	}
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

	return <div className={styles.overlay}>
		<ButtonUI type="close" id="overlay_closeBtn" clickHandler={() => { setOverlayVisible(false) }} />
			<Container>
				<Row alignItemsCenter>
					<Col lg={8}>
					{
						(photoGallery && elements.length > 0) ? 
						(
						<>
							<Frame type="photo_gallery" clickHandler={() => { openLightbox() }}>
								<Image
									src={featuredImage.node.sourceUrl}
									alt={featuredImage.node.altText}
									width={featuredImage.node.mediaDetails.width}
									height={featuredImage.node.mediaDetails.height}
								/>
							</Frame>
							<SRLWrapper elements={elements} options={options} />
						</>
						) : video ? 
						(	
						<>
							<Frame type="video" clickHandler={() => { openLightbox() }}>
								<Image
									src={featuredImage.node.sourceUrl}
									alt={featuredImage.node.altText}
									width={featuredImage.node.mediaDetails.width}
									height={featuredImage.node.mediaDetails.height}
									onClick={() => { openLightbox() }}
								/>
							</Frame>
							<SRLWrapper elements={videoElement} options={options} />
						</>
						) : (
							<Image
								src={featuredImage.node.sourceUrl}
								alt={featuredImage.node.altText}
								width={featuredImage.node.mediaDetails.width}
								height={featuredImage.node.mediaDetails.height}
							/>
						)
					}
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
