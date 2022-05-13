import classNames from 'classnames/bind';

import styles from './row.module.scss'

let cx = classNames.bind(styles);

export default function Row({ children, alignItems, justifyContent, marginBottom}) {
	let rowClasses = cx({
		row: true,
		[`align-items-${alignItems}`]: alignItems,
		[`justify-content-${justifyContent}`]: justifyContent,
		[`margin-bottom-${marginBottom}`] : marginBottom
	});

	return (
		<div className={rowClasses}>
			{children}
		</div>
	)
}
