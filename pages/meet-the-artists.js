import BioImage from '../components/BioImage'
import Col from '../components/col'
import Heading from '../components/Heading'
import Layout from '../components/layout'
import Link from 'next/link'
import Row from '../components/row'
import Section from '../components/section'

import { getArtists } from '../lib/api'
import {formatRoles} from '../lib/utils'

export async function getStaticProps() {
	const artists = await getArtists()
	return {
		props: {
			artists
		}
	}
}

export default function MeetTheArtists({artists}) {
	return (
		<Layout>
			<Section>
				<Row>
					<Col textAlign="center">
						<Heading level="1" marginBottom="3">Meet the Artists</Heading>
					</Col>
				</Row>
				<Row>
					{artists.map((artist, index) => {
						const {title, slug, featuredImage, years, roles, relatedPost } = artist.node;

						return relatedPost.relatedProjectArtist !== null ? 
							<Col key={index} xs="12" sm="4" textAlign="center" marginBottom="10" flexDirection="column" justifyContent="center">
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
								roles && <Heading key={index} level="5">{formatRoles(roles)}</Heading>
							}
						</Col>
						: ''
					})}
				</Row>
			</Section>
		</Layout >
	)
}
