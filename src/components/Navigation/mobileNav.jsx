import { NavLink } from 'react-router-dom';

function MobileNav() {
  return (
    <div className="mobileNav">
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
      {/* <NavLink to="./campApp" name="Camping">
        Camping App
      </NavLink> */}

      {/* <NavLink to="./contact" name="contact">
        Contact
      </NavLink> */}
    </div>
  );
}
export default MobileNav;
