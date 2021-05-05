import classNames from 'classnames/bind';

import styles from './row.module.scss'

let cx = classNames.bind(styles);

export default function Row({ children, alignItemsCenter = false, justifyContentSpaceBetween=false}) {
	let rowClasses = cx({
		row: true,
		['align-items-center']: alignItemsCenter,
		['justify-content-space-between']: justifyContentSpaceBetween
	});

	return (
		<div className={rowClasses}>
			{children}
		</div>
	)
}
