import Image from 'next/image'

import styles from './card.module.scss'

export default function Card({node, clickHandler}) {

	const {title, featuredImage} = node;

	return (
		<div 
			className={styles.card}
			onClick={clickHandler}	
		>
			{featuredImage && 
				<Image
					src={featuredImage.node.sourceUrl}
					alt={featuredImage.node.altText}
					width={featuredImage.node.mediaDetails.width}
					height={featuredImage.node.mediaDetails.height}
					layout="responsive"
				/>
			}
			
		</div>
	)
}
