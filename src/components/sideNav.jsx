import { Link } from 'react-router-dom';
import { Button } from 'semantic-ui-react';
import './sideNav.css';
function Nav() {
  return (
    <div>
      <div className="navBtnSticky">
        <Button circular icon>
          <ul>
            <div className="webLink">
              <li>
                <Link to="Web">Web</Link>
              </li>
            </div>
            <div className="designLink">
              <li>
                <Link to="Design">Design</Link>
              </li>
            </div>
            <div className="illusLink">
              <li>
                <Link to="Illustration">Illustration</Link>
              </li>
            </div>
          </ul>
        </Button>
      </div>
      <ul className="menu">
        <li>
          <Link to="/">Home</Link>
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
