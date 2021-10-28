
import {useState} from "react";
import { Link } from "react-router-dom"

const ItemCount = ({ stock, initial, onAdd}) => {
    const [count, setCount] = useState(initial)
    const stockUsuario = stock;
    const [cambiarBoton, setCambiarBoton] = useState(true);
   
    const handleCount = () => {        
         setCount(count+1);    
    }
    //alert(count);
    const minCount = () => {
        if(count > 1){
            alert('No puede ser menor que 1');
        }else{
            setCount(count-1);
        }
    }
    const enviarCarrito =() =>{        
        if(count > stockUsuario){
            alert('Stock del Producto es menor no se puede enviar al Carrito');
        }else if(count === 0){
            alert('Debe seleccionar al menos un producto para enviar al Carrito');
        }else{
            onAdd(count)
            setCambiarBoton(false)
        }
    }
    return (
        <>
            <div className="row">
                <div className="col-sm-2 text-center">
                    <button className="mx-auto btn-block btn btn-outline-primary btn-sm" onClick={minCount}>-</button>{' '}
                </div>
                <div className="col-sm-8">
                    <input type="number" placeholder="Contador" className="form-control" value={count}/>
                </div>
                <div className="col-sm-2 text-center">
                    <button className="mx-auto btn-block btn btn-outline-primary btn-sm" onClick={handleCount}>+</button>{' '}
                </div>
            </div>
            <div className="row">
                <div className="col-sm-12 text-center">
                    { cambiarBoton ? 
                        <button className="btn btn-primary btn-sm" onClick={enviarCarrito}>Enviar Carrito</button>
                        :
                        <div>
                            <Link exact to={'/cart'}>
                            <button className="waves-effect btn btn-success btn-sm" onClick={enviarCarrito}>Terminar Compra</button>
                            </Link>
                            <Link exact to={'/'}><button className="btn btn-info btn-sm" onClick={enviarCarrito}>Seguir Comprando</button></Link>
                        </div>
                
                    }
                </div> 
            </div>
        </>
    )
}

export default ItemCount
