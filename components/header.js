import Link from 'next/link'
import * as Scroll from 'react-scroll';

import Nav from './Nav'

import styles from './header.module.scss'

let ScrollLink = Scroll.Link;
let scroll = Scroll.animateScroll;

export default function Header() {
	return <header className={styles.header}>
		<Nav>
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
		</Nav>
	</header>
}
