const NavBar = ({ button }) => {
  return (
    <div>
      <button onClick={() => button(-1)}>Précédent</button>
      <button onClick={() => button(1)}>Suivant</button>
    </div>
  );
};
export default NavBar;
