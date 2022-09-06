import { NavLink } from 'react-router-dom';

function DesktopNav() {
  return (
    <div className="desktopNav">
      <NavLink to="/" name="home">
        <ion-icon size="medium" name="square"></ion-icon>
        Home
      </NavLink>

      <NavLink to="about" name="about">
        <ion-icon size="medium" name="square"></ion-icon>
        About
      </NavLink>

      <NavLink to="web" name="web">
        <ion-icon size="medium" name="square"></ion-icon>
        web
      </NavLink>

      <NavLink to="illustration" name="illustration">
        <ion-icon size="medium" name="square"></ion-icon>
        Illustration
      </NavLink>

      {/* <NavLink to="./contact" name="contact">
        Contact
      </NavLink> */}
    </div>
  );
}
export default DesktopNav;
