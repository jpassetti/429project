import classNames from 'classnames/bind';

import Image from 'next/image'

import styles from './button-ui.module.scss'

let cx = classNames.bind(styles);

export default function ButtonUI({type, id, clickHandler=null, icon}) {

	let btnClasses = cx({
		['btn-ui']: true,
		['close'] : type === 'close',
		['menu']: type === 'menu'
	});

	return <button id={id} className={btnClasses} onClick={clickHandler}>
			<Image 
				src={`/images/icons/icon-${type}.svg`}
				width={50}
				height={50}
				alt={`${type} icon`}
			/>
		</button>
}
