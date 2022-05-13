import BioImage from './BioImage'
import Col from './col'
import Heading from './Heading'
import Link from 'next/link'
import Row from './row'

import { formatRoles } from '../lib/utils'

export default function ArtistCard({node}) {
	const { title, slug, featuredImage, years, roles, relatedPost } = node;
	return relatedPost.relatedProjectArtist !== null ?
			<Col xs="12" sm="4" textAlign="center" marginBottom="10" flexDirection="column" justifyContent="center">
				<Row justifyContent="center">
					<Col xs="8" sm="8" marginBottom="0">
						{featuredImage &&
							<Link href={`/artists/${slug}`}>
								<a>
									<BioImage featuredImage={featuredImage} />
								</a>
							</Link>
						}

					</Col>
				</Row>


				<Heading level="2" textTransform="none" size="small">
					<Link href={`/artists/${slug}`}><a>{title}</a>
					</Link></Heading>
				{
					years.edges.map((year, index) => {
						return <Heading key={index} level="4" marginBottom="2">{year.node.name}</Heading>
					})
				}
				{
					roles && <Heading level="5">{formatRoles(roles)}</Heading>
				}
			</Col>
		: ''
}
