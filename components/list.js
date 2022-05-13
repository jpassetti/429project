import classNames from 'classnames/bind'
import styles from './list.module.scss'

let cx = classNames.bind(styles)

const List = ({type, children, noBullets, marginBottom, teamList}) => {
	let listClasses = cx({
		list: true,
		primary: type === 'primary',
		secondary: type === 'secondary',
		noBullets : noBullets,
		teamList: teamList,
		[`margin-bottom-${marginBottom}`] : marginBottom
	});
	return <ul className={listClasses}>
		{children}
	</ul>
}
const ListItem = ({children, size}) => {
	let itemClasses = cx({
		item: true,
		[`${size}`] : size
	});
	return <li className={itemClasses}>{children}</li>
}
List.Item = ListItem;
export default List



