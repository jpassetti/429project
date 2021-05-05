import classNames from 'classnames/bind';

import styles from './col.module.scss'

let cx = classNames.bind(styles);

export default function Col({children, xs=false, sm=false, md=false, lg=false}) {
	let colClasses = cx({
		col: true,
		[`xs--${xs}`]: xs,
		[`sm--${sm}`] : sm,
		[`md--${md}`]: md,
		[`lg--${lg}`]: lg,
	});


	return (<div className={colClasses}>
		{children}
	</div>)
}
