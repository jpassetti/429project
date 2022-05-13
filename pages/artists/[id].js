import {Fragment} from 'react'

import Image from 'next/image'

import Layout from '../../components/layout'
import Container from '../../components/Container'
import Group from '../../components/Group'
import Heading from '../../components/Heading'
import Paragraph from '../../components/Paragraph'
import Main from '../../components/main'
import ResponsiveVideo from '../../components/ResponsiveVideo'
import Row from '../../components/row'
import Col from '../../components/col'

import { getAllArtistSlugs, getSingleArtistBySlug } from '../../lib/api'
import { formatRoles } from '../../lib/utils'
import BioImage from '../../components/BioImage'

export async function getStaticPaths() {
	const paths = await getAllArtistSlugs();

	return {
		paths,
		fallback: false
	}
}
export async function getStaticProps({ params }) {

	const artistData = await getSingleArtistBySlug(params.id)

	return {
		props: {
			artistData
		},
	}
}

export default function Artist({artistData}) {
	const { title, featuredImage, slug, artistInformation, roles, years, relatedPost } = artistData;
	const { portfolioUrl, firstName, lastName} = artistInformation;
	const { relatedProjectArtist } = relatedPost;
	const rolesArr = roles.edges.map(role => {
		return role.node.name;
	})
	return (
		<Layout>
			<Container>
				<Main>
					<Row justifyContent="center" marginBottom="4">
						{featuredImage && 
						<>
							<Col sm={4}>
								<BioImage featuredImage={featuredImage} size="large" />
							</Col>
							<Col sm={1}></Col>
						</>
						}
						<Col sm={7} flexDirection="column" justifyContent="center">
							{/*<Heading level="5" color="red" sans fontWeight="bold">Artists</Heading>*/}
							<Heading level="1">{title}</Heading>

							{roles && 
							<Group>
								<Heading level="4" marginBottom="1">{years.edges.map(year => {
									return year.node.name;
								})}</Heading>
								<Paragraph>{formatRoles(roles)}</Paragraph>
							</Group>
							}

							{portfolioUrl && 
								<Group>
									<Heading level="4" marginBottom="1">Portfolio URL</Heading>
									<Paragraph>
										<a href={portfolioUrl} target="_blank" style={{ "color": "black" }}>
											{portfolioUrl}
										</a>
									</Paragraph>
								</Group>
							}
						</Col>
					</Row>
					<Row>
						<Col xs="12" sm="12">
							{relatedPost.relatedProjectArtist && relatedPost.relatedProjectArtist.map((project, index) => {
									const { featuredImage } = project;
									return <Fragment key={index}>
										<Row>
											<Col xs="12" sm="4">
										<Group>
											<Heading level="4" marginBottom="1">Project title</Heading>
											<Paragraph>{project.title}</Paragraph>
										</Group>

										<Group>
											<Heading level="4" marginBottom="1">Project summary</Heading>
											<Paragraph>{project.excerpt}</Paragraph>
										</Group>
											</Col>
											<Col xs="12" sm="8">
										
										{
										project.projectInformation.video ? 
											<Group key={index}>
												<ResponsiveVideo src={project.projectInformation.video} />
											</Group>
										: project.projectInformation.photoGallery ? 
											project.projectInformation.photoGallery.map((item, index )=>{
											return <Group key={index}><Image 
												key={index}
												src={item.slide.sourceUrl}
												alt={item.slide.altText}
												width={item.slide.mediaDetails.width}
												height={item.slide.mediaDetails.height}
												layout="responsive"
											/>
											{item.slide.caption &&
												<Paragraph marginTop="2">{item.slide.caption}</Paragraph>
											}
												
											</Group>
										})
										: featuredImage ? <Group key={index}>
											<Image
												src={featuredImage.node.sourceUrl}
												alt={featuredImage.node.altText}
												width={featuredImage.node.mediaDetails.width}
												height={featuredImage.node.mediaDetails.height}
												layout="responsive"
											/>
										</Group>
										:''
										}
										</Col>
										</Row>
									</Fragment>
								})}
						</Col>
					</Row>
				</Main>
			</Container>
		</Layout>
	)
}


