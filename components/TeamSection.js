import Col from './col'
import Layout from './layout'
import Heading from './Heading'
import Row from './row'
import Section from './section'
import List from './list'
const TeamSection = () => {
	return <>
		<Row>
			<Col xs="12" lg="8">
				<Heading level="2" size="small" color="red">
					Students
				</Heading>
				<Row>
					<Col xs="12" md="6" marginBottom="0">
						<List noBullets teamList>
							<List.Item>Payton Alibrandi, Designer</List.Item>
							<List.Item>Chris Bennett, Designer</List.Item>
							<List.Item>Katie Benson, Designer</List.Item>
							<List.Item>Dasha Bychkova, Designer</List.Item>
							<List.Item>Payton Campbell, Designer</List.Item>
							<List.Item>Kevin Bonilla Camelo, Designer</List.Item>
							<List.Item>Jiawen (Sara) Cao, Designer</List.Item>
							<List.Item>Ben Cauz, Designer</List.Item>
							<List.Item>Gianna Corrente, Designer</List.Item>
							<List.Item>Samantha Currier, Designer</List.Item>
							<List.Item>Chandler Dewgard, Designer</List.Item>
							<List.Item>Xiaoqian Dong, Designer</List.Item>
							<List.Item>Katie Getman, Designer</List.Item>
							<List.Item>Elizabeth Goldish, Designer</List.Item>
							<List.Item>Anastasia Golub, Designer</List.Item>
							<List.Item>Noah Hammerman, Designer</List.Item>
							<List.Item>Catie Haugen, Designer</List.Item>
						</List>
					</Col>
					<Col xs="12" md="6">
						<List noBullets teamList>
							<List.Item>Tanner Hogan, Designer</List.Item>
							<List.Item>Lauren Hurwitz, Designer</List.Item>
							<List.Item>Danny Kahn, Designer</List.Item>
							<List.Item>Shannon Kirkpatrick, Designer</List.Item>
							<List.Item>Bailey Kretschmer, Designer</List.Item>
							<List.Item>Julia Lawrence, Designer</List.Item>
							<List.Item>Sarah Lee, Photo Editor</List.Item>
							<List.Item>Jiaqi Liu, Designer</List.Item>
							<List.Item>Zuzanna Mlynarczyk, Designer</List.Item>
							<List.Item>Emily Steinberger, Copy Editor</List.Item>
							<List.Item>Lucinda Strol, Designer</List.Item>
							<List.Item>Kashawn Stroman, Designer</List.Item>
							<List.Item>Talia Trackim, Designer</List.Item>
							<List.Item>Melissa Ward, Designer</List.Item>
							<List.Item>Kristen Warner, Designer</List.Item>
							<List.Item>Yuxuan Wu, Designer</List.Item>
							<List.Item>Jiaxing Natalia Deng Yuan, Designer</List.Item>
						</List>
					</Col>
				</Row>
			</Col>
			<Col xs="12" md="4">
				<Heading level="2" size="small" color="red">Coaches</Heading>
				<List noBullets teamList marginBottom="4">
					<List.Item>Victoria Amoroso</List.Item>
					<List.Item>Jade Broomfield</List.Item>
					<List.Item>Phillip Elgie</List.Item>
					<List.Item>Chloe Meister</List.Item>
					<List.Item>Jeff Passetti</List.Item>
					<List.Item>Hannah Tak</List.Item>
					<List.Item>Colin Tuttle</List.Item>
				</List>
				<Heading level="2" size="small" color="red">Faculty</Heading>
				<List teamList noBullets>
					<List.Item>Ken Harper</List.Item>
					<List.Item>Jeff Passetti</List.Item>
					<List.Item>Renée Stevens</List.Item>
					<List.Item>Claudia Strong</List.Item>
					<List.Item>Bruce Strong</List.Item>
				</List>
			</Col>
		</Row>
	</>
}
export default TeamSection;
