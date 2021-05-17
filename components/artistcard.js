import Image from 'next/image'
import Link from 'next/link'

import styles from './artistcard.module.scss'

export default function ArtistCard({node}) {
	const { title, featuredImage, slug, artistInformation, roles, years } = node;
	const rolesArr = roles.edges.map(role => {
		return role.node.name;
	})
	const rolesJoined = rolesArr.join('<span>|</span>')
	return (
		<div className={styles.artist_card}>
			<Link href={`/artists/${slug}`}>
				<a>
					<Image
						src={featuredImage.node.sourceUrl}
						alt={featuredImage.node.altText}
						width={featuredImage.node.mediaDetails.width}
						height={featuredImage.node.mediaDetails.height}
						className={`${styles.artist_image}`}
					/>
				</a>
			</Link>
			<h3 className={styles.artist_name}>
				<Link href={`/artists/${slug}`}>
					<a>
						{title}
					</a>
				</Link>
			</h3>
			<h4 className={styles.artist_year}>{years.edges.map(year => {
					return year.node.name;
			})}</h4>
			<h5 className={styles.artist_role} dangerouslySetInnerHTML={{ __html:rolesJoined }}></h5>

		</div>
	)
}
