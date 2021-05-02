import Link from 'next/link'
import * as Scroll from 'react-scroll';

let ScrollLink = Scroll.Link;
let scroll = Scroll.animateScroll;

import styles from './cta.module.scss'
import classNames from 'classnames/bind';

let cx = classNames.bind(styles);

export default function CTA({linkTo, scrollTo, label, type}) {

	let ctaClasses = cx({
		cta: true,
		primary: type === 'primary',
		secondary: type === 'secondary',
	});
		if (scrollTo) {
			return <ScrollLink activeClass="active" className={ctaClasses} to={scrollTo} spy={true} smooth={true} duration={500}>{label}</ScrollLink>
		} else {
			return <Link href={linkTo}>
				<a className={ctaClasses}>{label}</a>
			</Link>
		}
}
