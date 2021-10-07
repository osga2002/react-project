import { useState, useEffect } from 'react'
import { getFetch } from '../utils/Mock'

import ItemCount from "./ItemCount"
import ItemList from './ItemList'


function ItemListContainer({greeting}) {
    const [personas, setPersonas] = useState([])
    const [loading, setLoading] = useState(true)

    const onAdd = (cant)=>{
        console.log(cant)
    }

    useEffect(() => {
        getFetch
        .then(respuesta =>{
            setPersonas(respuesta)
        })
        .catch(error => console.log(error))
        .finally(()=> setLoading(false))
    })
    return (
        <div>
            <h1>Es el proyecto de Jesús Salvación y Vida Eterna!!</h1>
            <h2>{greeting}</h2>
            { loading ? <h2>Cargando...</h2> : <ItemList personas={personas}/>

            }
            <ItemCount stock={7} initial={1} onAdd={onAdd} />
        </div>
    )
}

export default ItemListContainer
