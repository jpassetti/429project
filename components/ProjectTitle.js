import styles from './projectTitle.module.scss'

const ProjectTitle = ({children}) => {
	return <span className={styles.projectTitle}>{children}</span>
}
export default ProjectTitle;
