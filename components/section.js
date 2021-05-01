import styles from './section.module.scss'

export default function Section({id, children}) {
	return <section id={id} className={styles.section}>{children}</section>
}
