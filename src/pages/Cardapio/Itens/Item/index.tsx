import { Prato } from '../../../../types/Prato';
import styles from './Item.module.scss'

export default function Itens(props: Prato) {
    const { id, title, description, photo } = props;

    return (
        <div className={styles.item}>
            <div className={styles.item__img}>
                <img src={photo} alt={title} />
            </div>
            <div className={styles.item__descricao}>
                <div className={styles.item__titulo}>
                    <h2>{title}</h2>
                    <p>{description}</p>
                </div>
            </div>
        </div>
    )
}