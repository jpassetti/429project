import classNames from 'classnames/bind';

import styles from './col.module.scss'

let cx = classNames.bind(styles);

export default function Col({children, xs=false, sm=false, md=false, lg=false, textAlign, flexDirection, justifyContent, alignItems, marginBottom, marginTop}) {
	let colClasses = cx({
		col: true,
		[`xs--${xs}`]: xs,
		[`sm--${sm}`] : sm,
		[`md--${md}`]: md,
		[`lg--${lg}`]: lg,
		[`text-align-${textAlign}`] : textAlign,
		[`flex-direction-${flexDirection}`] : flexDirection,
		[`justify-content-${justifyContent}`] : justifyContent,
		[`align-items-${alignItems}`] : alignItems,
		[`margin-top-${marginTop}`] : marginTop,
		[`margin-bottom-${marginBottom}`] : marginBottom
	});


	return (<div className={colClasses}>
		{children}
	</div>)
}
