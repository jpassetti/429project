import styles from './section.module.scss'

export default function Section({id, children, className}) {
	return <section id={id} className={`${styles.section} ${className}`}>{children}</section>
}
