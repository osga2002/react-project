import Item from './Item'

const ItemList = ({items}) => {
    return (
        <>
            {items.map(item => <Item item={item} />
            
            )}       
        </>
    )
}

export default ItemList
