import styles from './Header.module.css'
import Image from 'next/image'
import logo from '../../../public/logoDj.png'

export function Header() {
	return (
		<div className={styles.header}>
			<Image src={logo} placeholder='blur' alt='logo strony' />
			<h3 className={styles.h3}>Nagłówek strony!</h3>
		</div>
	)
}
