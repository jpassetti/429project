import Container from './Container'
import Row from './row'
import Col from './col'
import Link from 'next/link'
import Logo from './Logo'
import Navigation from './Navigation'

import styles from './footer.module.scss';
import List from './list';

export default function Footer() {
	return <footer className={styles.footer}>
		<Container>
			<Row justifyContent="space-between">
				<Col sm={3}>
					<Navigation.FooterNav />
				</Col>
				<Col sm={3}>
					{/*<Navigation.FooterSocialMedia marginBottom={1} />*/}
					<Link href="/">
						<a><Logo color="white" size={.75} /></a>
					</Link>
				</Col>
			</Row>
		</Container>
		</footer>
}
