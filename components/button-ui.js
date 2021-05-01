import styles from './button-ui.module.scss'

export default function ButtonUI({className='', clickHandler=null, icon}) {

	const theClass = className === 'flyoutCloseBtn' ? styles.flyoutCloseBtn : '';

	return <button className={theClass} onClick={clickHandler}>{icon}</button>
}
