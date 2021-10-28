import { useState, useEffect } from 'react'
import { getFetch } from '../utils/Mock'
import { useParams } from "react-router-dom";
import ItemDetail from './ItemDetail'
import { getFirestore } from '../services/Firebase';

const ItemDetailContainer = () => {
    const [item, setItem] = useState([]);
    const { idProducto} = useParams()    
    const [loading, setLoading] = useState(true)
    useEffect(()=> { 
        const dbQuery = getFirestore()
        dbQuery.collection('items').doc(idProducto).get()
        .then(respuesta => setItem({id: respuesta.id, ...respuesta.data()} ))
        .catch(error => console.log(error))
        .finally(()=> setLoading(false)) 
            // getFetch
            // .then(res =>{
            //     if(idProducto){
            //         const itemFiltrado = res.filter(item => item.id === parseInt(idProducto))
            //         setItem(itemFiltrado[0])
            //     }else{
            //         setItem(res)        
            //     }
                
            // })
            // .catch(error => console.log(error))
            // .finally(()=> setLoading(false))
       
    }, [idProducto])
    return (
        <>
            { loading ? <h5>Cargando...</h5> : <ItemDetail item={item} />

            }
            
        </>
    )
}

export default ItemDetailContainer
