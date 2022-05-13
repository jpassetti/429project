import { useContext } from 'react'

import Card from './card'
import Col from './col'
import Heading from './Heading'
import Masonry, { ResponsiveMasonry } from "react-responsive-masonry"
import Paragraph from './Paragraph'
import Row from './row'
import Section from './section'

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
	//console.log({posts});

	const [isOverlayVisible, setOverlayVisible] = useContext(OverlayDisplayContext);
	const [overlayContent, setOverlayContent] = useContext(OverlayContentContext);
	return (
		<Section id={name.toLowerCase()}>
			<Row>
				<Col sm={5}>
					<Heading level="2">{name}</Heading>
					<Paragraph intro>{tagline}</Paragraph>
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
