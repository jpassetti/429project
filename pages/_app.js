import { useState, useEffect } from 'react'
import SimpleReactLightbox from 'simple-react-lightbox-pro'


import '../styles/global.scss'

import { OverlayDisplayContext } from '../context/overlay'
import { OverlayContentContext } from '../context/overlay'

export default function App({ Component, pageProps }) {
	
	const [isOverlayVisible, setOverlayVisible] = useState(false);
	const [overlayContent, setOverlayContent] = useState({});

	

	return <OverlayDisplayContext.Provider value={[isOverlayVisible, setOverlayVisible]}>
		<OverlayContentContext.Provider value={[overlayContent, setOverlayContent]}>
			
			<SimpleReactLightbox>
				<Component {...pageProps} />
			</SimpleReactLightbox>
			
		</OverlayContentContext.Provider>
	</OverlayDisplayContext.Provider>
}
