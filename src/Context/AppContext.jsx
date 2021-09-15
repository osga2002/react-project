import { useState, createContext, useContext } from "react";


const AppContext = createContext()

export const useAppContext = () => useContext(AppContext)


function AppContextProvider({children}) {
    const [producto, setProducto] = useState([{ id: "2", nombre: "Remera Negra",  precio: 27 }])
   
    function agregarAlCarrito(prod, cant){
        setProducto([...producto, {item: prod, quantity: cant}])
    }

    const borrarListado=()=>{
        setProducto([])
    }
   
   
    console.log(producto)
    return (
        <AppContext.Provider value={{
            producto,
            agregarAlCarrito,
            borrarListado
        }}>
            {children}
        </AppContext.Provider>
    )
}



export default AppContext
