import styles from './Header.module.css'
import Image from 'next/image'
import logo from '../../../public/logoDj.png'
import instagram from '../../../public/instagram.png'
import facebook from '../../../public/facebook.png'
import youtube from '../../../public/youtube.png'

export function Header() {
	return (
		<div className={styles.headerWrapper}>
			<div className={styles.header}>
				<div className={styles.spacer}></div>
				<Image src={logo} placeholder='blur' alt='logo strony' className={styles.logo} />
				<div className={styles.containerImages}>
					<Image src={instagram} placeholder='blur' alt='instagram' />
					<Image src={facebook} placeholder='blur' alt='facebook' />
					<Image src={youtube} placeholder='blur' alt='youtube' />
				</div>
			</div>

			<nav className={styles.nav}>
				<ul className={styles.menu}>
					<li className={`${styles.menuItem} ${styles.active}`}>O Mnie</li>
					<li className={styles.menuItem}>Oferta</li>
					<li className={styles.menuItem}>Galeria</li>
					<li className={styles.menuItem}>Opinie</li>
					<li className={styles.menuItem}>Kontakt</li>
					<li className={`${styles.menuItem} ${styles.busItem}`}>Bus na wynajem</li>
				</ul>
			</nav>
		</div>
	)
}
