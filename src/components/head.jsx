import { Link } from 'react-router-dom';
import logo from '../images/my_logo.svg';
import Nav from './sideNav';
function Head() {
  return (
    <div>
      <header className="head">
        <Link to="/">
          <img src={logo} className="logo-image" alt="Logo" height={100} />
        </Link>
      </header>
      <Nav />
    </div>
  );
}
export default Head;
