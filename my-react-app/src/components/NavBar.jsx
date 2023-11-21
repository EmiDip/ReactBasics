const NavBar = ({ button, list }) => {
  return (
    <div>
      {list.map((pokemon, i) => (
        <button
          key={pokemon.name}
          name={pokemon.name}
          onClick={() => button(i)}
        >
          {pokemon.name}
        </button>
      ))}
    </div>
  );
};
export default NavBar;

{
  /* <button onClick={() => button(-1)}>Précédent</button>
<button onClick={() => button(1)}>Suivant</button> */
}
