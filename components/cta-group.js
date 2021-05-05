import classNames from 'classnames/bind'

import styles from './cta.module.scss';

let cx = classNames.bind(styles);

export default function CTAGroup({children, justifyContentCenter=false}) {
	let groupClasses = cx({
		cta_group: true,
		['justify-content-center']: justifyContentCenter
	});
	return <div className={groupClasses}>
		{children}
	</div>
}
