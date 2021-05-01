export default function PostHeader({
	title,
	coverImage,
	date,
	author,
	categories,
}) {
	return (
		<div className="post-header">
			<h2>{title}</h2>
		</div>
	)
}
