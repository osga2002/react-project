import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavBar from './components/NavBar';
import ComponenteConteiner from './components/ComponenteConteiner';
import ItemListContainer from './components/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer';

export default function App(){
  return (
    <div className="App">
      <NavBar />
      <ItemListContainer greeting="hola" />
      <ItemDetailContainer />
      <ComponenteConteiner />
    </div>
  )
}
