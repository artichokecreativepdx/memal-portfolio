import logo from '../images/my_logo.svg';
import { Link } from 'react-router-dom';
function Head() {
  return (
    <div className="nav">
      <header className="head">
        <img src={logo} className="logo-image" alt="Logo" height={100} />
        <input className="menu-btn" type="checkbox" id="menu-btn" />
        <label className="menu-icon" htmlFor="menu-btn">
          <span className="navicon" />
        </label>
        <ul className="menu">
          <li>
            <Link to="Home">Home</Link>
          </li>
          <li>
            <Link to="About">About</Link>
          </li>
          <li>
            <Link to="Web">Web</Link>
          </li>
          <li>
            <Link to="Design">Design</Link>
          </li>
          <li>
            <Link to="Illustration">Illustration</Link>
          </li>
        </ul>
      </header>
    </div>
  );
}
export default Head;
