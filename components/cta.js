import Link from 'next/link'
import * as Scroll from 'react-scroll';

let ScrollLink = Scroll.Link;
let scroll = Scroll.animateScroll;

import styles from './cta.module.scss'

export default function CTA({linkTo, scrollTo, label, type}) {
		if (scrollTo) {
			return <ScrollLink activeClass="active" className="cta" to={scrollTo} spy={true} smooth={true} duration={500}>{label}</ScrollLink>
		} else {
			return <Link href={linkTo}>
				<a className={`${styles.cta} ${type}`}>{label}</a>
			</Link>
		}
}
