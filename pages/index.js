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
		<title>Pixels and Print - Prototype</title>
		<link rel="icon" href="/favicon.ico" />
		</Head>
		<HomeIntro />
			{categories.map((category,index) => {
				const { name, description, posts } = category.node;
				return <Region name={name} tagline={description} posts={posts.edges} key={`region${index}`} />
			})}
		<MeetTheArtists />
	</Layout>

}
