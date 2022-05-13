import Head from 'next/head'
import Layout from '../../components/layout'
import Heading from '../../components/Heading'
import Region from '../../components/region'

import { getCategoriesWithPosts } from '../../lib/api'

export async function getStaticProps() {
	const categories = await getCategoriesWithPosts()
	return {
		props: {
			categories
		}
	}
}

const ProjectsPage = ({categories}) => {
	return <Layout>
		<Head>
			<title>Projects | The 429 Project</title>
			<meta name="description" content="The 429 Project is a compilation of how students spent the first 429 days of COVID, and how they discovered creativity through the pandemic." />
		</Head>
		<Heading level="1">Projects</Heading>
		{categories.map((category, index) => {
			const { name, description, posts } = category.node;
			return <Region name={name} tagline={description} posts={posts.edges} key={`region${index}`} />
		})}
	</Layout>
}
export default ProjectsPage
