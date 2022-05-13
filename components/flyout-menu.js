import {useContext} from 'react'
import { useRouter } from 'next/router';
import * as Scroll from 'react-scroll';
import ButtonUI from './button-ui'
import Heading from './Heading'
import Navigation from './Navigation'
import Paragraph from './Paragraph'
import Link from 'next/link'
import Image from 'next/image'
import { motion, AnimatePresence } from "framer-motion"

import List from './list'

import styles from './flyout-menu.module.scss'
import listStyles from './navigation.module.scss'
import {getStaticCategories} from '../lib/api'

let ScrollLink = Scroll.Link;
let scroll = Scroll.animateScroll;

export default function FlyoutMenu({isMenuOpen, children}) {
	const router = useRouter();

	const variants = {
		open: { right: 0 },
		closed: { right: "-100vw" },
	}

	const categories = getStaticCategories();

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
				{/*<div className={styles.blobWave}>
					<Image src="/blobs/blob-edge.svg"
						width={116.3}
						height={578.26} alt=""/>
				</div>*/}
			<Heading level="3" color="white">
				<Link href="/">
					<a>the 429 Project</a>
				</Link>
			</Heading>
			<Paragraph color="white" sans>An exploration of creativity through the pause.</Paragraph>
		</div>
		
		<Navigation>
			<List type="primary">
				{categories.map((category, index) => {
					const { slug, name, description } = category.node;
					return <List.Item key={index} size="large">
						{router.pathname === '/' ?
							<ScrollLink activeClass="active" to={slug} spy={true} smooth={true} duration={500}>{name}</ScrollLink>
						: 
							<Link href={`/#${slug}`}>
								<a>
									{name}
								</a>
							</Link>
						}
						<Paragraph color="white">{description}</Paragraph>
					</List.Item>
				})}
			</List>
		</Navigation>
		<Navigation>
			<List type="secondary">
				<List.Item>
					<Link href="/artists">
						<a>Meet the artists</a>
					</Link>
				</List.Item>
				<List.Item>
					<Link href="/about">
						<a>About this project</a>
					</Link>
				</List.Item>
			</List>
		</Navigation>
	</motion.div>
	</AnimatePresence>
}
