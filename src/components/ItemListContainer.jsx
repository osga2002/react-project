import { useState, useEffect } from 'react'
import { getFetch } from '../utils/Mock'
import { useParams } from "react-router-dom";
import ItemList from './ItemList'


function ItemListContainer({greeting}) {
    const [personas, setPersonas] = useState([])
    const [loading, setLoading] = useState(true)
    const { idCategoria} = useParams()

    useEffect(() => {
        if(idCategoria){
            getFetch
            .then(respuesta =>{
                setPersonas(respuesta.filter(prod => prod.categoria === idCategoria))
            })
            .catch(error => console.log(error))
            .finally(()=> setLoading(false))

        }else{
            getFetch
            .then(respuesta =>{
                setPersonas(respuesta)
            })
            .catch(error => console.log(error))
            .finally(()=> setLoading(false))

        }
    }, [idCategoria])
    console.log(idCategoria);
    return (
        <div className="container">
            <h1>Es el proyecto de venta por catalogo de respuestos para motos.</h1>
            <h2>{greeting}</h2>
                <div className="row">
                { loading ? <h2>Cargando...</h2> : <ItemList personas={personas}/>

                }
                </div>
        </div>
    )
}

export default ItemListContainer
