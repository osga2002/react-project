
import {useState} from "react";

const ButonSumar = () => {
    
    return (
        <>

        </>
    )
}

const ItemCount = ({ stock, initial, onAdd}) => {
    const [count, setCount] = useState(initial)
    const stockUsuario = stock;
   
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
        onAdd(count)
        if(count > stockUsuario){
            alert('Stock del Producto es menor no se puede enviar al Carrito');
        }else if(count === 0){
            alert('Debe seleccionar al menos un producto para enviar al Carrito');
        }else{
            alert('Se envían '+count+' al Carrito');
        }
    }
    return (
        <>
            <div className="row">
                <div className="col-sm-2 text-center">
                <button className="mx-auto btn-block btn btn-outline-primary" onClick={handleCount}>+</button>{' '}
                </div>
                <div className="col-sm-8">
                <input type="number" placeholder="Contador" className="form-control" value={count}/>
                </div>
                <div className="col-sm-2 text-center">
                <button className="mx-auto btn-block btn btn-outline-primary" onClick={minCount}>-</button>{' '}
                </div>
            </div>
            <div className="row">
                <div className="col-sm-12 text-center">
                    <button className="btn btn-success" onClick={enviarCarrito}>Enviar Carrito</button>{' '}
                </div> 
            </div>
        </>
    )
}

export default ItemCount
