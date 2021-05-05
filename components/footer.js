import Container from './container'
import Row from './row'
import Col from './col'

import styles from './footer.module.scss';

export default function Footer() {
	return <footer className={styles.footer}>
		<Container>
			<Row justifyContentSpaceBetween>
				<Col sm={3}>
				Nav left
				</Col>
				<Col sm={3}>
					Social media icons<br />
					Logo
				</Col>
			</Row>
		</Container>
		</footer>
}
