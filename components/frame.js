import Image from 'next/image'

import styles from './frame.module.scss'

export default function Frame({children, type, clickHandler}) {

	let iconName;
	switch (type) {
		case 'photo_gallery':
			iconName = 'gallery';
			break;
		case 'video':
			iconName = 'play';
			break;
		default:
			iconName = null;
	}


	return <div className={styles.frame}>
		{
			type &&
			<div className={styles.frame_icon} onClick={clickHandler}>
				<Image
					src={`/images/icons/icon-${iconName}.svg`}
					width={32}
					height={32}
					alt={`${type} icon`}
				/>
			</div>
		}
		{children}
		<div className={styles.frame_tint}></div>
	</div>
}
