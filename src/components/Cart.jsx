import {useState} from 'react'
import { useAppContext } from "../Context/AppContext";
import { AiFillDelete } from 'react-icons/ai'
import { GrClearOption } from 'react-icons/gr'
import {Link} from 'react-router-dom'
import { getFirestore } from '../services/Firebase';
import firebase from "firebase";
import 'firebase/firestore'
const Cart = () => {
    const [verBotonTerminar, setVerBotonTerminar] = useState(true);
    const [formData, setFormData] = useState({
        nombre: '',
        celular: '',
        email: '',
        email2: '',
    })
    const {carList, retirarItem, borrarListado, cantidadTotal, ventaTotal } = useAppContext()
    function handleOnChange(e){
        e.preventDefault()
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        })
       //alert(formData.email)
            //if (formData.email === formData.email2) {
                setVerBotonTerminar(false)
            //}else{
                //setVerBotonTerminar(true)
            //}            
    }
    const handleOnSubmit = (e) => {
        e.preventDefault()
        
        let orden = {}
        orden.date = firebase.firestore.Timestamp.fromDate( new Date() );
        //orden.buyer = { nombre:'Jesus', celular:'3115665984', email: 'osga.2002@gmail.com'}
        orden.buyer = formData
        orden.total = ventaTotal();
        orden.items = carList.map(carItem => {
            const id = carItem.item.id;
            const name = carItem.item.name;
            const precio = carItem.item.precio;
            const cantidad = carItem.cantidad;
            const totalItem = carItem.cantidad * carItem.item.precio;            
            return {id, name, precio, cantidad, totalItem}
        })
        const db = getFirestore()
        db.collection('orders').add(orden)
        .then(resp => alert(resp.id))
        .catch( err => console.log(err))
        .finally(() => setFormData({
            nombre: '',
            celular: '',
            email: '',
            email2: '',
        }))
    }
    const sinItem = <>
    <h5>Tu Carrito está vacio! Para comprar empieza aquí: </h5>
    <Link to="/">
        <button className="btn btn-sm btn-success">Vamos!!</button>
    </Link>
    </>
    if(carList.length ===0 ) return sinItem;
    return (
        <>
        <div className="container">
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
                                <th className="text-sm-center">{cantidadTotal()}</th>
                                <th>$ {ventaTotal()} </th>
                            </tr>
                        </tbody>
                    </table>
                    <button className="btn btn-sm btn-primary" onClick={() => borrarListado()}>Limpiar Carrito <GrClearOption /></button>
                </div>
                <div className="col-sm-6">
                    <form 
                         onSubmit={handleOnSubmit}
                         onChange={handleOnChange}
                    >
                        <div class="form-group row">
                        <div class="col-sm-12"><h5>Gracias por tu compra ya casi terminamos!!</h5></div>
                        </div>
                        <div class="form-group row">
                            <label for="numsol" class="col-sm-4 col-form-label-sm"><b>Nombre Completo:</b></label>
                            <div class="col-sm-8"><input type="text" className="form-control" placeholder="Jesus" name="nombre" /></div>
                        </div>
                        <div class="form-group row">
                            <label for="numsol" class="col-sm-4 col-form-label-sm"><b>Celular:</b></label>
                            <div class="col-sm-8"><input type="text" className="form-control" placeholder="" name="celular" /></div>
                        </div>
                        <div class="form-group row">
                            <label for="numsol" class="col-sm-4 col-form-label-sm"><b>Correo:</b></label>
                            <div class="col-sm-8"><input type="email" className="form-control" placeholder="" name="email" /></div>
                        </div>
                        <div class="form-group row">
                            <label for="numsol" class="col-sm-4 col-form-label-sm"><b>Confirme Correo:</b></label>
                            <div class="col-sm-8"><input type="email" className="form-control" placeholder="" name="email2" /></div>
                        </div>
                        
                        <div class="form-group row">
                            <div class="col-sm-12">
                            { verBotonTerminar ? 
                                    <h5>Diligencia los campos para terminar</h5>
                                :
                                    <button className="btn btn-sm btn-info" type="submit">Terminar compra</button>
                            }
                            </div>
                        </div>
                    </form>

                </div>
            </div>
        </div>
        </>
    )
}

export default Cart
