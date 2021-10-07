import { useState, useEffect } from 'react'
import { getFetchUno } from '../utils/Mock'

const ItemDetailContainer = () => {
    useEffect(()=> {
        getFetchUno
        .then(resp => console.log(resp))
    }, [])
    return (
        <div>
            hola soy detalle
        </div>
    )
}

export default ItemDetailContainer
