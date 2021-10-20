import { useState } from 'react'
import { useParams } from "react-router-dom";
import ItemCount from "./ItemCount"
const ItemDetail = ({item}) => {
    const [cantidadSeleccionada, setCantidadSeleccionada] = useState(0)
    const onAdd = (cant)=>{
        console.log(cant)
        setCantidadSeleccionada(cant)
    }
    return (
        <>
            <div className="row">
                <div className="offset-sm-3 col-sm-4">
                    <div key={item.id} className="card bg-light">
                        <div className="card-header">Detalle de {item.name}</div>
                        <div className="card-body">
                            <img src={item.foto} /><br />
                            <h5 className="card-title">Descripción</h5>
                            <p className="card-text">{item.descripcion}</p>
                            <label htmlFor="precio">Precio</label>
                            <input type="number" className="form-control-sm text-right" id="precio" value={item.precio} />
                        </div>
                        <div className="card-footer">
                            <div>
                                <ItemCount stock={7} initial={1} onAdd={onAdd} />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default ItemDetail
