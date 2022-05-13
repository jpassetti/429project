import classNames from 'classnames/bind'

import styles from './heading.module.scss'

let cx = classNames.bind(styles)

const Heading = ({children, level, dek, textTransform, size, marginBottom, textAlign, color, sans}) => {
	let headingClasses = cx({
		heading: true,
		[`heading${level}`] : level,
		dek: dek,
		[`${size}`] : size,
		sans: sans,
		[`margin-bottom-${marginBottom}`] : marginBottom,
		[`text-transform-${textTransform}`] : textTransform,
		[`text-align-${textAlign}`] : textAlign,
		[`font-color-${color}`] : color
	})
	if (level === "1") {
		return <h1 className={headingClasses}>{children}</h1>
	} else if (level === "2") {
		return <h2 className={headingClasses}>{children}</h2>
	} else if (level === "3") {
		return <h3 className={headingClasses}>{children}</h3>
	} else if (level === "4") {
		return <h4 className={headingClasses}>{children}</h4>
	} else if (level === "5") {
		return <h5 className={headingClasses}>{children}</h5>
	} else if (level === "6") {
		return <h6 className={headingClasses}>{children}</h6>
	} else {
		<p>The level prop needs to be passed into the heading component.</p>
	}
}
export default Heading;
