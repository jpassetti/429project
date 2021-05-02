import Section from './section'
import Masonry, { ResponsiveMasonry } from "react-responsive-masonry"
import Image from 'next/image'

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

export default function Region({name, tagline}) {

	return (
		<Section id={name.toLowerCase()}>
			<h2>{name}</h2>
			<p className="intro">{tagline}</p>
			<ResponsiveMasonry
				columnsCountBreakPoints={{ 350: 1, 750: 2, 900: 3 }}
			>
			<Masonry columnsCount={3} gutter="10px">
				{
					sampleProjects.map((project,i) => {
						return <div key={`${name.toLowerCase()}${i}`} className="col col--sm--4">
							<Image 
								src={`/images/${project.image}`}
								alt="Alt text goes here"
								width={1920}
								height={1200}
							/>
						</div>
					})
				}
			</Masonry>
			</ResponsiveMasonry>
		</Section>
	)
}
