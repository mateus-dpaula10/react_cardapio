import styles from './Itens.module.scss'
import cardapio from '../../../data/cardapio.json'
import { useState } from 'react'
import Item from './Item'

interface Props {
    busca: string,
    filtro: number | null,
    ordenador: string
}

export default function Itens(props: Props) {
    const [lista, setLista] = useState(cardapio)

    return (
        <div className={styles.itens}>
            {lista.map(item => (
                <Item 
                    key={item.id}
                    {...item}
                />
            ))}
        </div>
    )
}