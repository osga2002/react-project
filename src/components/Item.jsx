import { memo } from 'react'
import { Link, useParams } from 'react-router-dom'
import ItemCount from "./ItemCount"

const Item = ({personas}) => {
    //    console.log(personas);

    const onAdd = (cant)=>{
        console.log(cant)
    }
       return (
           <>
                <div key={personas.id} className="card text-center border-info col-sm-3">
                    <div className="card-header">{personas.name}</div>
                    <div className="card-body">
                        <div className="row"><div className="col-sm-12"><img src={personas.foto} width="90%"/></div></div><br />
                        <h5 className="card-title">Descripción</h5>
                        <p className="card-text">{personas.descripcion}</p>
                        <div className="row">
                            
                            <label htmlFor="precio" className="col-sm-3 col-form-label">Precio</label>
                            <div className="col-sm-8"><input type="number" className="form-control-sm text-right" id="precio" value={personas.precio} /></div>
                        </div>
                    </div>
                    <div className="card-footer">
                        <Link exact to={`detalle/${personas.id}`}>
                        <button className="btn btn-outline-primary btn-blok" >Detalles</button>
                        </Link>
                        <div>
                            <ItemCount stock={7} initial={1} onAdd={onAdd} />
                        </div>
                    </div>
                
                </div>
           </>
       )

}

export default Item
