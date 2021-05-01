import Head from 'next/head'
import Layout from '../components/layout'
import About from '../components/about'
import Projects from '../components/projects'
import Artists from '../components/artists'

export default function Home() {
  return (
    <Layout>
      <Head>
        <title>Pixels and Print - Prototype</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
			<About />
			<Projects />
			<Artists />
      </main> 
	</Layout>
  )
}
