import Link from 'next/link'
import * as Scroll from 'react-scroll';
import { createContext, useContext, useState } from 'react'



import Navigation from './navigation'
import ButtonUI from './button-ui'
import FlyoutMenu from './flyout-menu'
import Logo from './logo'
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
					<ButtonUI className="flyoutCloseBtn" icon="close" clickHandler={() => { setIsMenuOpen(!isMenuOpen) }} />
				</FlyoutMenu>
		}
		<Logo />
		<ButtonUI icon="menu" clickHandler={() => {setIsMenuOpen(!isMenuOpen)}} />
		{/*<Navigation>
			<ul>
				<li>
					<Link href="/" onClick={() => scroll.scrollTo("test1")}>
						<a>Home</a>
					</Link>
				</li>
				<li>
					<Link href="/design-system">
						<a>Design system</a>
					</Link>
				</li>
				<li>
					<ScrollLink activeClass="active" to="about" spy={true} smooth={true} duration={500}>About</ScrollLink>
				</li>
				<li>
					<ScrollLink activeClass="active" to="projects" spy={true} smooth={true} duration={500}>Projects</ScrollLink>
				</li>
				<li>
					<ScrollLink activeClass="active" to="artists" spy={true} smooth={true} duration={500}>Artists</ScrollLink>
				</li>
			</ul>
		</Navigation>*/}
	</header>
</MenuContext.Provider>
}
