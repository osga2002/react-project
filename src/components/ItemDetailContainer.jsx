import { useState, useEffect } from 'react'
import { getFetchUno } from '../utils/Mock'
import ItemDetail from './ItemDetail'

const ItemDetailContainer = () => {
    const [item, setItem] = useState({});
    useEffect(()=> {
        getFetchUno
        .then(resp => setItem(resp))
    }, [])
    return (
        <>
            <ItemDetail item={item} />
        </>
    )
}

export default ItemDetailContainer
