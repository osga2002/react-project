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
        let total = 0;
        carList.forEach(({prod}) => { total += parseInt(prod.item.precio) * parseInt(prod.cantidad)})
        return parseInt(total)
    }
    const cantidadTotal = () => {
        let cantidad = 0;
        carList.forEach(({prod}) => { cantidad += parseInt(prod.cantidad)})
        return parseInt(cantidad)
    }
   
    function agregarAlCarrito(prod){
        let buscarItem = []
        
        buscarItem = carList.findIndex(producto => prod.item.id === producto.item.id)
        if(buscarItem === -1){
            setCarList([...carList, prod])
            //alert('Es nuevo')
        }else{
            let modificarItem =[...carList]
            modificarItem[buscarItem].cantidad += prod.cantidad;
            setCarList(modificarItem)
            //alert("Cambio "+prod.item.name+" la nueva cantidad es: "+prod.cantidad)
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

