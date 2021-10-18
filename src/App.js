import logo from './logo.svg';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavBar from './components/NavBar';
import ComponenteConteiner from './components/ComponenteConteiner';
import ItemListContainer from './components/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer';
import Cart from './components/Cart';

export default function App(){
  return (
    <Router>
      <div className="App">
        <NavBar />
        <Switch>
          <Route exact path='/' component={ItemListContainer} />
          {/* <ComponenteConteiner /> */}
          <Route exact path='/categoria/:idCategoria' component={ItemListContainer} />
          <Route exact path='/detalle/:idProducto' component={ItemDetailContainer} />
          <Route exact path='/cart' component={Cart} />
        </Switch>
      </div>
    </Router>
  )
}
