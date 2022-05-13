import styles from './responsivevideo.module.scss'

const ResponsiveVideo = ({src}) => {
	return <div className={styles.responsiveVideo}>
		<iframe width="560" height="315" src="https://www.youtube.com/embed/xo0wU67F2Z8" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
	</div>
}
export default ResponsiveVideo
