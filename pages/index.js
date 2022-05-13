import {useState} from 'react'
import Head from 'next/head'
import Layout from '../components/layout'
import Region from '../components/region'
import HomeIntro from '../components/HomeIntro'
import MeetTheArtists from '../components/meet-the-artists'
import { getCategoriesWithPosts } from '../lib/api'
//import Lottie from 'react-lottie'
//import * as animationData from '../public/blobs/blueblob_v2.json'

//import blobs from '../components/blobs.module.scss'

//import MoreStories from '../components/more-stories'

export async function getStaticProps() {
	const categories = await getCategoriesWithPosts()
	return {
		props: { 
			categories 
		}
	}
}

export default function Index({ categories }) {
	//console.log({categories});
	const [isStopped, setIsStopped] = useState(false);
	const [isPaused, setIsPaused] = useState(false);

	return <Layout>
		<Head>
			<title>The 429 Project | Pixels and Print | Newhouse School at Syracuse University</title>
			<meta name="description" content="When the world hit pause, so did our plans for classes, graduation, and careers. We learned to connect, to value our own health, and to continue moving forward. We continued to create. This is the story of how we spent the last 429 days, and how we created our own path within the pause. This is the 429 project." />
		</Head>
		<HomeIntro />
			{categories.map((category,index) => {
				const { name, description, posts } = category.node;
				return <Region name={name} tagline={description} posts={posts.edges} key={`region${index}`} />
			})}
		<MeetTheArtists />
	</Layout>

}
