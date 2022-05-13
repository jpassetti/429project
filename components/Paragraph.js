import classNames from 'classnames/bind'

import styles from './paragraph.module.scss'

let cx = classNames.bind(styles)

const Paragraph = ({children, intro, color, sans, marginTop}) => {
	let paragraphClasses = cx({
		paragraph: true,
		intro: intro,
		sans: sans,
		[`${color}`] : color,
		[`margin-top-${marginTop}`] : marginTop
	});
	return <p className={paragraphClasses}>{children}</p>
}
export default Paragraph;
