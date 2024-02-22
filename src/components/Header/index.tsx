import styles from './Header.module.scss'
import stylesTema from '../../styles/Tema.module.scss'

export default function Header() {
    return (
        <div>
            <div className={styles.header}>
                <div className={styles.header__text}>
                    A casa do código e da massa
                </div>
            </div>
            <div className={stylesTema.container}>

            </div>
        </div>
    )
}