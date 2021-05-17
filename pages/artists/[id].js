import Image from 'next/image'

import Layout from '../../components/layout'
import Container from '../../components/container'
import Section from '../../components/section'
import Main from '../../components/main'
import Row from '../../components/row'
import Col from '../../components/col'

import { getAllArtists, getArtistBySlug } from '../../lib/api'

export default function Artist({artistData}) {
	const { title, featuredImage, slug, artistInformation, roles, years } = artistData;
	const rolesArr = roles.edges.map(role => {
		return role.node.name;
	})
	const rolesJoined = rolesArr.join('<span>|</span>')
	return (
		<Layout>
			<Container>
				<Main>
					<Row>
						<Col sm={6}>
							<Image
								src={featuredImage.node.sourceUrl}
								alt={featuredImage.node.altText}
								width={featuredImage.node.mediaDetails.width}
								height={featuredImage.node.mediaDetails.height}
							/>
						</Col>
						<Col sm={6}>
							<h1>{title}</h1>
							<h4>{years.edges.map(year => {
								return year.node.name;
							})}</h4>
							<h5 dangerouslySetInnerHTML={{ __html: rolesJoined }}></h5>
							<h4>Portfolio URL</h4>
							<p>https://....</p>
							<h4>Project title</h4>
							<p>Project title goes here</p>
							<h4>Project summary</h4>
							<p>Summary goes here...</p>
						</Col>
					</Row>
					<Row>
						<Col>Project stuff goes here.</Col>
					</Row>
				</Main>
			</Container>
		</Layout>
	)
}
export async function getStaticPaths() {
	const allArtists = await getAllArtists()

	const paths = allArtists.edges.map(edge => ({
		params: { id: edge.node.slug },
	}))
	return {
		paths,
		fallback: false
	}
}
export async function getStaticProps({ params }) {

	const artistData = await getArtistBySlug(params.id)

	return {
		props: {
			artistData
		},
	}
}

