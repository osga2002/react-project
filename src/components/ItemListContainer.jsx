import ItemCount from "./ItemCount"


function ItemListContainer({greeting}) {

    const onAdd = (cant)=>{
        alert(cant)
    }
    return (
        <div>
            <h1>Es el proyecto de Jesús Salvación y Vida Eterna!!</h1>
            <h2>{greeting}</h2>
            <ItemCount stock={7} initial={1} onAdd={onAdd} />
        </div>
    )
}

export default ItemListContainer
