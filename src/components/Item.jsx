import { memo } from 'react'
import { link } from 'react-router-dom'
import {useAppContext} from '../Context/AppContext'

const Item = ({item}) => {
    const {producto} = useAppContext()

      
       console.log('item')
       
       
       return (
           <>
               <div key={item.id} className='card w-50 mt-2'>
                   <div className="card-header">
                       {item.nombre}
                       {item.bool && 'verdadero'}
                   </div>
                   <div className="card-body">
                       <img src={item.url} alt='imagen' className='w-25' />
                   </div>
                   <div className="card-footer">
                       {`precio ${item.price}`}<br/>
                       <Link to="/detalle">
                           <button className="btn btn-outline-primary">Detalle</button>
                       </Link>                   
                        
                   </div>
               </div>
           </>
       )

}

export default Item
