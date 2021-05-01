import styles from './overlay.module.scss'

export default function Overlay({children}) {
	return <div className={styles.overlay}>{children}</div>
}
