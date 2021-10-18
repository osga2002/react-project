import React from 'react'
import { useParams } from "react-router-dom";
const ItemDetail = ({item}) => {
    return (
        <>
            <div key={item.id} className="card bg-light">
                <div className="card-header">Detalle de {item.name}</div>
                <div className="card-body">
                    <img src={item.foto} /><br />
                    <h5 className="card-title">Descripción</h5>
                    <p className="card-text">{item.descripcion}</p>
                    <label htmlFor="precio">Precio</label> 
                    <input type="number" className="form-control-sm text-right" id="precio" value={item.precio} />
                </div>
            </div>
        </>
    )
}

export default ItemDetail
