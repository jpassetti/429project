import Link from 'next/link'
import * as Scroll from 'react-scroll';
import { createContext, useContext, useState } from 'react'

import Navigation from './Navigation'
import ButtonUI from './button-ui'
import FlyoutMenu from './flyout-menu'
import Logo from './Logo'
import styles from './header.module.scss'

let ScrollLink = Scroll.Link;
let scroll = Scroll.animateScroll;

const MenuContext = createContext();

export default function Header() {
	let [isMenuOpen, setIsMenuOpen] = useState(false);

	return <MenuContext.Provider value={[isMenuOpen, setIsMenuOpen]}>
	<header className={styles.header}>
		{
			isMenuOpen &&
				<FlyoutMenu isMenuOpen>
					<ButtonUI 
						type="close" 
						id="flyoutMenuCloseBtn" 
						clickHandler={() => { setIsMenuOpen(!isMenuOpen) }} 
					/>
				</FlyoutMenu>
		}
		<Link href="/">
			<a>
			<Logo />
			</a>
		</Link>
		<ButtonUI shape="circle" type="menu" clickHandler={() => {setIsMenuOpen(!isMenuOpen)}} />
	</header>
</MenuContext.Provider>
}
