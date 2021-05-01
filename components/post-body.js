export default function PostBody({ content }) {
	return (
		<div className="post">
			<div
				dangerouslySetInnerHTML={{ __html: content }}
			/>
		</div>
	)
}
