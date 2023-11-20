import "./App.css";
import PokemonCard from "./components/PokemonCard";
import { useState } from "react";

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
      <PokemonCard pokemon={pokemonList[pokemonIndex]} />
      <button onClick={() => handleClick(-1)}>Précédent</button>
      <button onClick={() => handleClick(1)}>Suivant</button>
    </div>
  );
}

export default App;
