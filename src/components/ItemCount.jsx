import Button from "react-bootstrap/Button"
import FormControl from "react-bootstrap/FormControl"
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
                <div className="col-sm-1 text-center">
                <Button variant="primary" onClick={handleCount}>+</Button>{' '}
                </div>
                <div className="col-sm-3">
                <FormControl
                    placeholder="Contador"
                    type="number"
                    value={count}
                    />
                </div>
                <div className="col-sm-1 text-center">
                <Button variant="primary" onClick={minCount}>-</Button>{' '}
                </div>
            </div>
            <div className="row">
                <div className="col-sm-5 text-center">
                <   Button variant="success" onClick={enviarCarrito}>Enviar Carrito</Button>{' '}
                </div> 
            </div>
        </>
    )
}

export default ItemCount
