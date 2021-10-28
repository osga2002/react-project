import { Link } from 'react-router-dom'

const Item = ({item}) => {
    return (
        <>
            <div key={item.id} className="card text-center border-info col-sm-3">
                <div className="card-header">{item.name}</div>
                <div className="card-body">
                    <div className="row">
                        <div className="col-sm-12"><img src={item.foto} width="90%"  alt={item.name}/></div>
                    </div><br />
                    <h5 className="card-title">Descripción</h5>
                    <p className="card-text">{item.descripcion}</p>
                    <div className="row">

                        <label htmlFor="precio" className="col-sm-3 col-form-label">Precio</label>
                        <div className="col-sm-8"><input type="number" className="form-control-sm text-right" id="precio"
                                defaultValue={item.precio} /></div>
                    </div>
                </div>
                <div className="card-footer">
                    <Link exact to={`/detalle/${item.id}`}> <button className="btn btn-outline-primary btn-blok">
                    Detalles</button>
                    </Link>
                    <div>

                    </div>
                </div>

            </div>
        </>
    )
}

export default Item
