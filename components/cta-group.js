import styles from './cta.module.scss';

export default function CTAGroup({children}) {
	return <div className={styles.cta_group}>
		{children}
	</div>
}
