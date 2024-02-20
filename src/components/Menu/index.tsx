import { Link } from 'react-router-dom'
import styles from './Menu.module.scss'
import logo from '../../assets/logo.svg'

export default function Menu() {
    return (
        <header>
            <nav className={styles.menu}>
                <img src={logo} alt="Logo aluroni" />

                <ul className={styles.menu__list}>
                    <li className={styles.menu__link}>
                        <Link to="/">
                            Página Inicial
                        </Link>
                    </li>

                    <li className={styles.menu__link}>
                        <Link to="/cardapio">
                            Cardápio
                        </Link>
                    </li>

                    <li className={styles.menu__link}>
                        <Link to="/sobre">
                            Sobre
                        </Link>
                    </li>
                </ul>
            </nav>
        </header>
    )    
}