import Layout from '../../components/layout'
import Container from '../../components/container'
import Main from '../../components/main'
import Section from '../../components/section'
import Row from '../../components/row'
import Col from '../../components/col'
import ArtistCard from '../../components/artistcard'

import { getAllArtists } from '../../lib/api'

export default function Artists({ artistsArr }) {
	return (
		<Layout>
			<Container>
			<Main>
			
			<h1 style={{"text-align": "center"}}>Meet the Artists</h1>
			
			<Row justifyContentCenter>
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
