import PostPreview from '../components/post-preview'

export default function MoreStories({ posts }) {
	console.log({posts});
	return (
		<section>
			<h2>More Stories</h2>
			<div className="preview">
				{posts.map((post, index) => {
					console.log({post});
					const {node} = post;
					return <PostPreview
						key={index}
						node={node}
					/>
				})}
			</div>
		</section>
	)
}
