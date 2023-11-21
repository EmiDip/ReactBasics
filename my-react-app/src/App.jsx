import "./App.css";
import PokemonCard from "./components/PokemonCard";
import { useState } from "react";
import NavBar from "./components/NavBar";

function App() {
  const pokemonList = [
    {
      name: "bulbasaur",
      imgSrc:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/1.png",
    },
    {
      name: "mew",
    },
  ];

  const [pokemonIndex, setPokemonIndex] = useState(0);

  const handleClick = (i) => {
    const newIndex = pokemonIndex + i;

    if (newIndex >= 0 && newIndex < pokemonList.length) {
      setPokemonIndex(newIndex);
    }
  };

  return (
    <div>
      <NavBar button={handleClick} />
      <PokemonCard pokemon={pokemonList[pokemonIndex]} />
    </div>
  );
}

export default App;
