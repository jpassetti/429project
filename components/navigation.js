import styles from './navigation.module.scss'

export default function Navigation({children}) {
	return (
		<nav className={styles.navigation}>{children}</nav>
	)
}
