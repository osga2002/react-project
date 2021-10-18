import Item from './Item'

const ItemList = ({personas}) => {
    return (
        <>
            {personas.map(persona => <Item personas={persona} />
            
            )}       
        </>
    )
}

export default ItemList
