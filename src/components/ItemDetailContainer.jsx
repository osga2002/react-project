import { useState, useEffect } from 'react'
import { getFetch } from '../utils/Mock'
import { useParams } from "react-router-dom";
import ItemDetail from './ItemDetail'

const ItemDetailContainer = () => {
    const [item, setItem] = useState([]);
    const { idProducto} = useParams()
    // console.log('Este es el id '+idProducto);
    useEffect(()=> { 
            getFetch
            .then(res =>{
                if(idProducto){
                    // console.log('Jesus '+idProducto);
                    const itemFiltrado = res.filter(item => item.id === parseInt(idProducto))
                    // console.log(itemFiltrado);
                    // console.log(res);
                    setItem(itemFiltrado[0])
                }else{
                    // console.log('Jehova '+idProducto);  
                    setItem(res)        
                }
                
            })
            .catch(error => console.log(error))

       
    }, [idProducto])
    return (
        <>
            <ItemDetail item={item} />
        </>
    )
}

export default ItemDetailContainer
