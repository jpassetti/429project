import { useContext } from 'react'

import Container from './Container'
import Header from './header'
import Footer from './footer'
import Overlay from './overlay'

import {
	OverlayDisplayContext
} from '../context/overlay';

export default function Layout({ children }) {
	const [isOverlayVisible, setOverlayVisible] = useContext(OverlayDisplayContext);
	return (
		<>
			{
				isOverlayVisible &&
				<Overlay />
			}
			<Header />
			<main>
				<Container>
					{children}
				</Container>
			</main>
			<Footer />
		</>
	)
}
