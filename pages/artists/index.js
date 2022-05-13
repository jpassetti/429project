import Head from 'next/head'
import Layout from '../../components/layout'
import Container from '../../components/Container'
import Heading from '../../components/Heading'
import Main from '../../components/main'
import Row from '../../components/row'
import ArtistCard from '../../components/artistcard'

import { getArtists } from '../../lib/api'

export async function getStaticProps() {
	const artists = await getArtists()

	return {
		props: { artists }
	}
}

export default function Artists({ artists }) {
	return (
		<Layout>
			<Head>
				<title>Artists | The 429 Project</title>
				<meta name="description" content="The 429 Project is a compilation of how students spent the first 429 days of COVID, and how they discovered creativity through the pandemic." />
			</Head>
			<Container>
			<Main>
			
			<Heading level="1" textAlign="center" marginBottom="8">Meet the Artists</Heading>
			
			<Row justifyContent="center">
			{artists.map((artist,i) => {
				const { node } = artist;
				return <ArtistCard key={i} node={node} />
			})}
				</Row>
			
			</Main>
			</Container>
		</Layout>
	)
}

