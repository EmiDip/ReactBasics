const NavBar = ({ button, list }) => {
  const handleClick = (i) => {
    const selectedPokemon = list[i].name;
    button(i);

    if (selectedPokemon === "pikachu") {
      alert("pika pikachu !!!");
    }
  };
  return (
    <div>
      {list.map((pokemon, i) => (
        <button
          key={pokemon.name}
          name={pokemon.name}
          onClick={() => handleClick(i)}
        >
          {pokemon.name}
        </button>
      ))}
    </div>
  );
};
export default NavBar;
