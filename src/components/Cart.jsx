import React from 'react'
import { useAppContext } from "../Context/AppContext";
import { AiFillDelete } from 'react-icons/ai'
import { GrClearOption } from 'react-icons/gr'
import 'firebase/firebase'
import {Link} from 'react-router-dom'
const Cart = () => {
    const {carList, retirarItem, borrarListado, cantidadTotal, ventaTotal } = useAppContext()
    //const total = ventaTotal();
    const sinItem = <>
    <h5>Tu Carrito está vacio! Para comprar empieza aquí: </h5>
    <Link to="/">
        <button className="btn btn-sm btn-success">Vamos!!</button>
    </Link>
    </>
    console.log(ventaTotal);
    if(carList.length ===0 ) return sinItem;
    return (
        <>
        <h3 className="center-align">Carrito de compras </h3>
        <div className="row">
            <div className="col-sm-6">
                <table className="table table-sm table-light table-hover">
                    <thead>
                        <tr>
                            <th>Producto</th>
                            <th>Precio</th>
                            <th>Cantidad</th>
                            <th>Subtotal</th>
                            <th>Retirar</th>
                        </tr>
                    </thead>
                    <tbody>
                        { carList.map(prod => 
                        <tr>
                            <td>{prod.item.name}</td>
                            <td>{prod.item.precio}</td>
                            <td>{prod.cantidad}</td>
                            <td>{prod.item.precio * prod.cantidad}</td>
                            <td><button className="btn btn-sm btn-danger" onClick={() => retirarItem(prod.item.id)}><AiFillDelete /></button></td>                       
                        </tr>
                        )}
                        <tr>
                            <th>
                                Totales
                            </th>
                            <th></th>
                            <th className="text-sm-center">{cantidadTotal}</th>
                            <th>$ </th>
                        </tr>
                    </tbody>
                </table>
                <button className="btn btn-sm btn-primary" onClick={() => borrarListado()}>Limpiar Carrito <GrClearOption /></button>
            </div>
        </div>
        </>
    )
}

export default Cart
