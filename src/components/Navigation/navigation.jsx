import { NavLink } from 'react-router-dom';

function Nav() {
  return (
    <div className="navMenu">
      <NavLink to="/" name="home">
        Home
      </NavLink>

      <NavLink to="./about" name="about">
        About
      </NavLink>

      <NavLink to="./web" name="web">
        web
      </NavLink>

      <NavLink to="./illustration" name="illustration">
        Illustration
      </NavLink>
    </div>
  );
}
export default Nav;
