import { useContext } from 'react'

import Section from './section'
import Masonry, { ResponsiveMasonry } from "react-responsive-masonry"

import Row from './row'
import Col from './col'
import Card from './card'

import {
	OverlayDisplayContext, OverlayContentContext
} from '../context/overlay';

const sampleProjects = [
	{
		title: "Blah",
		slug: "blah-project",
		image: "passion-pollo.jpg"
	},
	{
		title: "Blah",
		slug: "blah-project",
		image: "passion-pollo.jpg"
	},
	{
		title: "Blah",
		slug: "blah-project",
		image: "passion-pollo.jpg"
	},
	{
		title: "Blah",
		slug: "blah-project",
		image: "passion-pollo.jpg"
	},
	{
		title: "Blah",
		slug: "blah-project",
		image: "passion-pollo.jpg"
	},
	{
		title: "Blah",
		slug: "blah-project",
		image: "passion-pollo.jpg"
	},
	{
		title: "Blah",
		slug: "blah-project",
		image: "passion-pollo.jpg"
	},
];

export default function Region({name, tagline, posts}) {
	console.log({posts});

	const [isOverlayVisible, setOverlayVisible] = useContext(OverlayDisplayContext);
	const [overlayContent, setOverlayContent] = useContext(OverlayContentContext);
	return (
		<Section id={name.toLowerCase()}>
			<Row>
				<Col sm={5}>
					<h2>{name}</h2>
					<p className="intro">{tagline}</p>
				</Col>
			</Row>
			
			<ResponsiveMasonry
				columnsCountBreakPoints={{ 768: 2, 1280: 3 }}
			>
			<Masonry columnsCount={3} gutter="16px">
				{
					posts.map((post,i) => {
						const {node} = post;
						return <Card 
							key={`post${i}`} 
							node={node} 
							clickHandler={() => {
								setOverlayVisible(true)
								setOverlayContent(node)
							}} />
						
					})
				}
			</Masonry>
			</ResponsiveMasonry>
		</Section>
	)
}
