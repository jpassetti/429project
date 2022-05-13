import Layout from '../../components/layout'
import Container from '../../components/Container'
import Heading from '../../components/Heading'
import Main from '../../components/main'
import Row from '../../components/row'
import Col from '../../components/col'
import ArtistCard from '../../components/artistcard'

import { getAllArtists } from '../../lib/api'

export default function Artists({ artistsArr }) {
	return (
		<Layout>
			<Container>
			<Main>
			
			<Heading level="1" textAlign="center">Meet the Artists</Heading>
			
			<Row justifyContent="center">
			{artistsArr.edges.map((edge,i) => {
				const { node } = edge;

				return (
					<Col xs={6} sm={6} md={3}><ArtistCard key={i} node={node} /></Col>
				)
			})}
				</Row>
			
			</Main>
			</Container>
		</Layout>
	)
}
export async function getStaticProps() {
	const artistsArr = await getAllArtists()

	return {
		props: { artistsArr }
	}
}
