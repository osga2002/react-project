import Item from './Item'

const ItemList = ({personas}) => {
    return (
        <>
            {personas.map(persona => <Item persona={persona} /> )
            }
        </>
    )
}

export default ItemList
