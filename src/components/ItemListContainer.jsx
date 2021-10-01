import { useState, useEffect } from 'react'
import { getFetchUno } from '../utils/Mock'

import ItemCount from "./ItemCount"
import ItemList from './ItemList'


function ItemListContainer({greeting}) {
    const [persona, setPersona] = useState([])
    const [loading, setLoading] = useState(true)

    const onAdd = (cant)=>{
        console.log(cant)
    }

    useEffect(() => {
        getFetchUno
        .then(respuesta =>{
            setPersona(respuesta)
        })
        .catch(error => console.log(error))
        .finally(()=> setLoading(false))
    })
    return (
        <div>
            <h1>Es el proyecto de Jesús Salvación y Vida Eterna!!</h1>
            <h2>{greeting}</h2>
            { loading ? <h2>Cargando...</h2> : <ItemList persona={persona} />

            }
            <ItemCount stock={7} initial={1} onAdd={onAdd} />
        </div>
    )
}

export default ItemListContainer
