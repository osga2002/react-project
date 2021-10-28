import { useState, useEffect } from 'react'
import { getFetch } from '../utils/Mock'
import { useParams } from "react-router-dom";
import ItemList from './ItemList'
import { getFirestore } from '../services/Firebase';


function ItemListContainer({greeting}) {
    const [items, setItems] = useState([])
    const [loading, setLoading] = useState(true)
    const { idCategoria} = useParams()

    useEffect(() => {        
        const dbQuery = getFirestore()
        if(idCategoria){
            dbQuery.collection('items').where('categoria', '==', idCategoria).get()
            .then(respuesta =>{                
                    setItems(respuesta.docs.map(prod => ({id: prod.id, ...prod.data()})))
                
            })
            .catch(error => console.log(error))
            .finally(()=> setLoading(false)) 
        }else{
            dbQuery.collection('items').get()
            .then(respuesta =>{
                if(idCategoria){
                    // setItems(respuesta.docs.map(prod => prod.categoria === idCategoria))
                }else{
                    setItems(respuesta.docs.map(prod => ({id: prod.id, ...prod.data()})))
                }
            })
            .catch(error => console.log(error))
            .finally(()=> setLoading(false)) 
        }
            // getFetch
            // .then(respuesta =>{
            //     if(idCategoria){
            //         setItems(respuesta.filter(prod => prod.categoria === idCategoria))
            //     }else{
            //         setItems(respuesta)
            //     }
            // })
            // .catch(error => console.log(error))
            // .finally(()=> setLoading(false))        
    }, [idCategoria])
    return (
        <div className="container">
            <h1>Es el proyecto de venta por catalogo de respuestos para motos.</h1>
            <h2>{greeting}</h2>
                <div className="row">
                { loading ? <h2>Cargando...</h2> : <ItemList items={items}/>

                }
                </div>
        </div>
    )
}

export default ItemListContainer
