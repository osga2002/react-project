
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavBar from './components/NavBar';
import ItemListContainer from './components/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer';
import Cart from './components/Cart';
import AppContextProvider from './Context/AppContext';



export default function App(){
  return (
    <AppContextProvider>
      <Router>
        <div className="App">
          <NavBar />
          <Switch>
            <Route exact path='/' component={ItemListContainer} />
            <Route exact path='/categoria/:idCategoria' component={ItemListContainer} />
            <Route exact path='/detalle/:idProducto' component={ItemDetailContainer} />
            <Route exact path='/cart' component={Cart} />
          </Switch>
        </div>
      </Router>
    </AppContextProvider>
  )
}
