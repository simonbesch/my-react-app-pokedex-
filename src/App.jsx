// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import PokemonCard from "./components/PokemonCard.jsx";
import './App.css'

const pokemonList = [
  {
    name: "bulbasaur",
    imgSrc:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/1.png",
  },
  {
    name: "mew",
    imgSrc:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/150.png",
  },
  {
    name: "palkia",
    
  },
];



function App() {
  return (
    <>
      {pokemonList.map((pokemon) => (
        <PokemonCard 
        key={pokemon.name}
        nom={pokemon.name}
        img={pokemon.imgSrc}
        />
      ))}
    </>
  )
}

export default App
