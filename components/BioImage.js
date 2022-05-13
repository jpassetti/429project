import classNames from 'classnames/bind'
import Image from 'next/image'
import styles from './bioimage.module.scss'

let cx = classNames.bind(styles)

const BioImage = ({featuredImage, size}) => {
	let bioimageClasses = cx({
		bioimage: true,
		[`${size}`] : size
	});
	return <div className={bioimageClasses} style={{
		//backgroundImage: `url(${featuredImage.node.sourceUrl})`
	}}>
		<Image 
			src={featuredImage.node.sourceUrl}
			alt={featuredImage.node.altText}
			width={featuredImage.node.mediaDetails.width}
			height={featuredImage.node.mediaDetails.height}
		/>
	</div>
}
export default BioImage;
