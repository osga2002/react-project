import React from 'react'

const ItemDetail = ({item}) => {
    return (
        <>
            <div key={item.id} className="card w-25 mt-3">
                <div className="card-header">Detalle de {item.name}</div>
                <div className="card-body">
                    <img src={item.foto} /><br />
                    <p className="card-text">{item.descripcion}</p>
                    <label htmlFor="">Precio</label> 
                </div>
            </div>
        </>
    )
}

export default ItemDetail
