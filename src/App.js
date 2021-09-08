import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavBar from './components/NavBar';
import ComponenteConteiner from './components/ComponenteConteiner';
import ItemListContainer from './components/ItemListContainer';

const App = () => {
  return (
    <>
      <NavBar />
      <ItemListContainer greeting='Es el proyecto de Jesús Salvación y Vida Etterna!! ' />
      <ComponenteConteiner />
    </>
  )
}

export default App;
