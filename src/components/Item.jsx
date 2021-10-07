import { memo } from 'react'

const Item = ({persona}) => {
       
       return (
           <>
                <div key={persona.id} className="card w-25 mt-3">
                    <div className="card-header">{persona.name}</div>
                    <div className="card-body">
                        <img src={persona.foto} /><br />
                        <p class="card-text">{persona.descripcion}</p>
                        <label htmlFor="">Precio</label> <input className="form-control text-right" value={persona.precio} /> 
                    </div>
                    <div className="card-footer">
                        <button className="btn btn-outline-primary btn-blok">Detalles</button>
                    </div>
                </div>
           </>
       )

}

export default Item
