import Date from '../components/date'
import Link from 'next/link'

export default function PostPreview({node}) {
	console.log({node});
	const { slug, title, date, excerpt, author } = node;
	return (
		<div className="card">
			<h3 className="text-3xl mb-3 leading-snug">
				<Link as={`/projects/${slug}`} href="/projects/[slug]">
					<a
						className="hover:underline"
						dangerouslySetInnerHTML={{ __html: title }}
					></a>
				</Link>
			</h3>
		</div>
	)
}
