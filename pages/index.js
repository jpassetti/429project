import {useState} from 'react'
import Head from 'next/head'
import Layout from '../components/layout'
import Container from '../components/container'
import Region from '../components/region'
import HomeIntro from '../components/home-intro'
import MeetTheArtists from '../components/meet-the-artists'
import { getAllPostsForHome } from '../lib/api'
import Lottie from 'react-lottie'
import * as animationData from '../public/blobs/blueblob_v2.json'

import blobs from '../components/blobs.module.scss'

import MoreStories from '../components/more-stories'

export default function Index({ allPosts: { edges }, preview }) {
	const [isStopped, setIsStopped] = useState(false);
	const [isPaused, setIsPaused] = useState(false);

	const morePosts = edges.slice(0);
	console.log({morePosts});

	const buttonStyle = {
		display: 'block',
		margin: '10px auto'
	};

	const defaultOptions = {
		loop: true,
		autoplay: true,
		animationData: animationData,
		rendererSettings: {
			preserveAspectRatio: 'xMidYMid slice'
		}
	};

	const categories = [
		{
			name: "Reform",
			slug: "reform",
			description: "Not only the way we design, but the value behind our message."
		},
		{
			name: "Cherish",
			slug: "cherish",
			description: "The stories we are able to tell, and the visuals we are embodied to create."
		},
		{
			name: "Envision",
			slug: "envision",
			description: "A better future through the creative vision we have the power to tell"
		},
		{
			name: "Reflect",
			slug: "reflect",
			description: "On our triumphs, our failures and our success as humans and creatives"
		},
	];
	
	return (
    <Layout>
      <Head>
        <title>Pixels and Print - Prototype</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
		<Container>
      		<main>
				<HomeIntro />
				<div className={`${blobs.blob} ${blobs.blob1}`}>
					<Lottie options={defaultOptions}
						height={400}
						width={400}
						isStopped={isStopped}
						isPaused={isPaused}
					/>
				</div>
				<div className={`${blobs.blob} ${blobs.blob2}`}>
					<Lottie options={defaultOptions}
						height={400}
						width={400}
						isStopped={isStopped}
						isPaused={isPaused}
					/>
				</div>
					{
						categories.map((category,i) => {
							const filteredPosts = morePosts.filter(function(post) {
								return post.node.categories.edges[0].node.slug === category.slug;
							});
							return <Region name={category.name} tagline={category.description} posts={filteredPosts} key={`region${i}`} />
						})
					}
					<MeetTheArtists />
      		</main> 
			</Container>
	</Layout>
  )
}

export async function getStaticProps({ preview = false }) {
	const allPosts = await getAllPostsForHome(preview)
	return {
		props: { allPosts, preview },
	}
}
