import { Link } from 'react-router-dom';
import 'sideNav.css';
function Nav() {
  return (
    <div>
      <input className="menu-btn" type="checkbox" id="menu-btn" />
      <label className="menu-icon" htmlFor="menu-btn">
        <i className="ellipsis horizontal icon" />
      </label>
      <ul className="menu">
        <li>
          <Link to="/">Home</Link>
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
    </div>
  );
}
export default Nav;
