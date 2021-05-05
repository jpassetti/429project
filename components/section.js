import classNames from 'classnames/bind';

import styles from './section.module.scss'

let cx = classNames.bind(styles);

export default function Section({ id, children, className, textAlignCenter=false}) {
	let sectionClasses = cx({
		section: true,
		['text-align-center']: textAlignCenter,
	});

	return <section id={id} className={sectionClasses}>
		<div className={styles.section_content}>
			{children}
		</div>
	</section>
}
