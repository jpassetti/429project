import { useRouter } from 'next/router'
import ErrorPage from 'next/error'
import Container from '../../components/container'
import PostBody from '../../components/post-body'
import Header from '../../components/header'
import PostHeader from '../../components/post-header'
import Layout from '../../components/layout'
import { getAllPostsWithSlug, getPostAndMorePosts } from '../../lib/api'
import PostTitle from '../../components/post-title'
import Head from 'next/head'
import { CMS_NAME } from '../../lib/constants'

export default function Post({ post, posts, preview }) {
	const router = useRouter()
	const morePosts = posts?.edges

	if (!router.isFallback && !post?.slug) {
		return <ErrorPage statusCode={404} />
	}

	return (
		<Layout preview={preview}>
			<Container>
				<Header />
				{router.isFallback ? (
					<PostTitle>Loading…</PostTitle>
				) : (
					<>
						<article>
							<Head>
								<title>
									{post.title} | Next.js Blog Example with {CMS_NAME}
								</title>
								<meta
									property="og:image"
									content={post.featuredImage?.node?.sourceUrl}
								/>
							</Head>
							<PostHeader
								title={post.title}
								coverImage={post.featuredImage?.node}
								date={post.date}
								author={post.author?.node}
								categories={post.categories}
							/>
							<PostBody content={post.content} />
						</article>
					</>
				)}
			</Container>
		</Layout>
	)
}

export async function getStaticProps({ params, preview = false, previewData }) {
	const data = await getPostAndMorePosts(params.slug, preview, previewData)

	return {
		props: {
			preview,
			post: data.post,
			posts: data.posts,
		},
	}
}

export async function getStaticPaths() {
	const allPosts = await getAllPostsWithSlug()

	return {
		paths: allPosts.edges.map(({ node }) => `/projects/${node.slug}`) || [],
		fallback: true,
	}
}
