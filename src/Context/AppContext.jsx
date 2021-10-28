import { useState, createContext, useContext } from "react";
const AppContext = createContext([])

export const useAppContext = () => useContext(AppContext)
export default function AppContextProvider({children}) {
    const [carList, setCarList] = useState([])
    const categoriasMotos = [
        {nombre: "Kawasaki",tipo: "Enduro"},
        {nombre: "Bajak",tipo: "Ciudad"},
        {nombre: "Honda",tipo: "Diversa"},
        {nombre: "Susuki",tipo: "Todo Terreno"},
    ]
    const [state, setState] = useState(categoriasMotos)
    const ventaTotal = () => {
        return carList.reduce((acum, valor)=> acum + (valor.cantidad * valor.item.precio), 0)
    }
    const cantidadTotal = () => {
        return carList.reduce((acum, valor)=> acum + valor.cantidad, 0)
    }
   
    function agregarAlCarrito(prod){
        let buscarItem = carList.findIndex(producto => prod.item.id === producto.item.id)
        if(buscarItem === -1){
            setCarList([...carList, prod])
        }else{
            let modificarItem =[...carList]
            modificarItem[buscarItem].cantidad += prod.cantidad;
            setCarList(modificarItem)
        }
    }

    const borrarListado=()=>{
        setCarList([])
    }
    
    const retirarItem = (id) =>{
        setCarList(carList.filter(prod => prod.item.id !== id));
    }
    //console.log('Jesus '+carList)
    return (
        <AppContext.Provider value={{
            state, carList, categoriasMotos, ventaTotal, cantidadTotal,
            agregarAlCarrito,
            borrarListado, retirarItem
        }}>
            {children}
        </AppContext.Provider>
    )
}

