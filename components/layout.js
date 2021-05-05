import { useContext } from 'react'

import Header from './header'
import Footer from './footer'
import Overlay from './overlay'

import {
	OverlayDisplayContext
} from '../context/overlay';

export default function Layout({ children }) {
	const [isOverlayVisible, setOverlayVisible] = useContext(OverlayDisplayContext);
	return (
		<div>
			{
				isOverlayVisible &&
				<Overlay />
			}
			<Header />
			{children}
			<Footer />
		</div>
	)
}
