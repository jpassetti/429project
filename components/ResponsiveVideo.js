import styles from './responsivevideo.module.scss'

const ResponsiveVideo = ({children}) => {
	return <div className={styles.responsiveVideo}>
		{children}
	</div>
}
export default ResponsiveVideo
