import classNames from 'classnames/bind'

import styles from './bioimage.module.scss'

let cx = classNames.bind(styles)

const BioImage = ({featuredImage, size}) => {
	let bioimageClasses = cx({
		bioimage: true,
		[`${size}`] : size
	});
	return <div className={bioimageClasses} style={{
		backgroundImage: `url(${featuredImage.node.sourceUrl})`
	}}/>
}
export default BioImage;
