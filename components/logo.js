import Image from 'next/image'

const Logo = ({color="color", size=1}) => {
	return <Image
			src={`/images/logo-429project--${color}.svg`}
			alt="429 Project"
			width={138.2 * size}
			height={47.4 * size}
		/>
}
export default Logo
