import Layout from '../components/layout'
import Head from 'next/head'
import Section from '../components/section'

export default function DesignSystem() {
	return (
		<Layout>
			<Head>
				<title>Pixels and Print - Design system</title>
			</Head>

			<main>
				<Section>
				<h1>Primary headline goes here</h1>
				<h2>Secondary headline goes here</h2>
				<h3>Tertiary headline goes here</h3>
				<p>Apparently we had reached a great height in the atmosphere, for the sky was a dead black, and the stars had ceased to twinkle.</p>
				</Section>
			</main>
		</Layout>
	)
}
