import Link from 'next/link'
import Image from 'next/image'

import styles from './navigation.module.scss'

const Navigation = ({children}) => {
	return (
		<nav className={styles.navigation}>{children}</nav>
	)
}
const FooterNav = ({children}) => {
	const navLinks = [
		{
			label: "About 429",
			slug: "about"
		},
		{
			label: "Meet the Artists",
			slug: "meet-the-artists"
		},
		{
			label: "Team",
			slug: "team"
		},
		/*{
			label: "Gallery",
			slug: "gallery"
		},*/
		{
			label: "Projects",
			slug: "projects"
		},
	];


	return <nav className={styles.navigation}>
		<ul className={styles.list}>
		{navLinks.map((navLink, index) => {
				const {label, slug} = navLink;
				return <li key={index} className={styles.item}>
					<Link href={`/${slug}`}>
					<a>
						{label}
					</a>
					</Link>
				</li>
			})}
		</ul>
	</nav>
}
Navigation.FooterNav = FooterNav

const FooterSocialMedia = ({marginBottom=0}) => {
	const socialMediaLinks = [
		{
			slug: "twitter",
			path: "https://www.twitter.com"
		},
		{
			slug: "facebook",
			path: "https://www.facebook.com"
		},
		{
			slug: "instagram",
			path: "https://www.instagram.com"
		}
	];
	return <nav className={styles.navigation} style={{marginBottom:marginBottom + "rem"}}>
		<ul className={styles.socialMediaList}>
			{socialMediaLinks.map((socialMediaLink, index) => {
				const { slug, path } = socialMediaLink;
				return <li key={index} className={styles.socialMediaListItem}>
					<a href={path} target="_blank">
						<Image 
							src={`/images/icons/icon-${slug}--white.svg`}
							alt={`${slug} icon`}
							width={32}
							height={32}
						/>
					</a>
				</li>
			})}
		</ul>
	</nav>
}
Navigation.FooterSocialMedia = FooterSocialMedia;
export default Navigation
