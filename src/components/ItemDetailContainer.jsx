import { useState, useEffect } from 'react'
import { getFetch } from '../utils/Mock'
import { useParams } from "react-router-dom";
import ItemDetail from './ItemDetail'
import { getFirestore } from '../services/Firebase';

const ItemDetailContainer = () => {
    const [item, setItem] = useState([]);
    const { idProducto} = useParams()    
    const [loading, setLoading] = useState(true)
    // console.log('Este es el id '+idProducto);

    useEffect(()=> { 
        const dbQuery = getFirestore()
        dbQuery.collection('items').doc(idProducto).get()
        .then(respuesta => setItem({id: respuesta.id, ...respuesta.data()} ))
        .catch(error => console.log(error))
        .finally(()=> setLoading(false)) 
            // getFetch
            // .then(res =>{
            //     if(idProducto){
            //         // console.log('Jesus '+idProducto);
            //         const itemFiltrado = res.filter(item => item.id === parseInt(idProducto))
            //         // console.log(itemFiltrado);
            //         // console.log(res);
            //         setItem(itemFiltrado[0])
            //     }else{
            //         // console.log('Jehova '+idProducto);  
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
