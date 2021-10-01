import logo from './logo.svg';
import './App.css';
import { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavBar from './components/NavBar';
import ComponenteConteiner from './components/ComponenteConteiner';
import ItemListContainer from './components/ItemListContainer';

export default function App(){
 const [pokes, setPokes] = useState([])
 const pokemonID = 1
 useEffect(() => {
    fetch('https://pokeapi.co/api/v2/pokemon/')
    .then((res) => res.json())
    .then((resp) => setPokes(resp.results));
    
  }, []);
  return (
    <div className="App">
      <NavBar />
      <ItemListContainer greeting="hola" />
      <ComponenteConteiner />
      {pokes.map((poke) => (
        <h2>{poke.name}</h2>
      ))}
    </div>
  )
}
