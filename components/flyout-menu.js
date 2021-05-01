import * as Scroll from 'react-scroll';
import ButtonUI from './button-ui'
import Navigation from './navigation'
import Link from 'next/link'
import Image from 'next/image'
import { motion, AnimatePresence } from "framer-motion"

import List from './list'

import styles from './flyout-menu.module.scss'
import listStyles from './navigation.module.scss'

let ScrollLink = Scroll.Link;
let scroll = Scroll.animateScroll;

export default function FlyoutMenu({isMenuOpen, children}) {
	

	const variants = {
		open: { right: 0 },
		closed: { right: "-100vw" },
	}

	return <AnimatePresence>
	<motion.div 
		initial="closed"
		animate={isMenuOpen ? "open" : "closed"}
		variants={variants}
		className={`${styles.flyoutMenu}`}
		exit={{ right: `${-100}vw` }}
		>
		{children}
			<div className={styles.flyoutHeader}>
				<div className={styles.blobWave}>
					<Image src="/blobs/blob-edge.svg"
						width={116.3}
						height={578.26} alt=""/>
				</div>
		<h3>the 429 Project</h3>
		<p>An exploration of creativity through the pause.</p>
		</div>
		
		<Navigation>
			<List type="primary">
				{/*<li>
					<Link href="/" onClick={() => scroll.scrollTo("test1")}>
						<a>Home</a>
					</Link>
				</li>
				<li>
					<Link href="/design-system">
						<a>Design system</a>
					</Link>
				</li>*/}
				<li>
					<ScrollLink activeClass="active" to="reform" spy={true} smooth={true} duration={500}>Reform</ScrollLink>
					<p>Not only the way we design, but the value behind our message</p>
				</li>
				<li>
					<ScrollLink activeClass="active" to="cherish" spy={true} smooth={true} duration={500}>Cherish</ScrollLink>
					<p>The stories we are able to tell, and the visuals we are embodied to create.</p>
				</li>
				<li>
					<ScrollLink activeClass="active" to="envision" spy={true} smooth={true} duration={500}>Envision</ScrollLink>
					<p>A better future through the creative vision we have the power to tell</p>
				</li>
				<li>
					<ScrollLink activeClass="active" to="reflect" spy={true} smooth={true} duration={500}>Reflect</ScrollLink>
					<p>On our triumphs, our failures and our success as humans and creatives</p>
				</li>
			</List>
		</Navigation>
		<Navigation>
			<List type="secondary">
				<li>
					<Link href="/meet-the-artists">
						<a>Meet the artists</a>
					</Link>
				</li>
				<li>
					<Link href="/about">
						<a>About this project</a>
					</Link>
				</li>
			</List>
		</Navigation>
	</motion.div>
	</AnimatePresence>
}
