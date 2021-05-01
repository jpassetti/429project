import styles from './list.module.scss'

export default function List({type, children}) {
	return <ul className={type === 'primary' ? styles.primary : styles.secondary}>
		{children}
	</ul>
}
