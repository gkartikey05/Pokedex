import { useState } from "react";
import PokemonList from "../PokemonList/PokemonList";
import Search from "../Search/Search";
import './Pokedex.css';
import PokemonDetails from "../PokemonDetails/PokemonDetails";


function Pokedex (){
  const [searchTerm, setSeachTerm] = useState('');

  return (
    <div className="pokedex-wrapper">
      <Search updateSearchTerm={setSeachTerm}/>
      {(!searchTerm) ? <PokemonList/> : <PokemonDetails key={searchTerm} pokemonName={searchTerm}/>}
    </div>
  )
}

export default Pokedex;