import "./App.css";
import { useState } from "react";
import { useEffect } from "react";
import PokemonCard from "./components/PokemonCard";
import NavBar from "./components/NavBar";

function App() {
  const pokemonList = [
    {
      name: "bulbasaur",
      imgSrc:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/1.png",
    },
    {
      name: "charmander",
      imgSrc: "https://www.pokepedia.fr/images/8/89/Salam%C3%A8che-RFVF.png",
    },
    {
      name: "squirtle",
      imgSrc: "https://www.pokepedia.fr/images/c/cc/Carapuce-RFVF.png",
    },
    {
      name: "pikachu",
      imgSrc: "https://www.pokepedia.fr/images/7/76/Pikachu-DEPS.png",
    },
    {
      name: "psyduck",
      imgSrc: "https://www.pokepedia.fr/images/4/44/Psykokwak-RFVF.png",
    },
    {
      name: "mew",
      imgSrc: "https://www.pokepedia.fr/images/1/16/Mew-DEPS.png",
    },
  ];

  const [pokemonIndex, setPokemonIndex] = useState(0);

  const handleClick = (i) => {
    setPokemonIndex(i);
  };

  useEffect(() => {
    alert("hello pokemon trainer :)");
  }, []);

  return (
    <div>
      <NavBar list={pokemonList} button={handleClick} />
      <PokemonCard pokemon={pokemonList[pokemonIndex]} />
    </div>
  );
}

export default App;
