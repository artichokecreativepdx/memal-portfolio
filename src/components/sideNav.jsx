import { Link } from 'react-router-dom';
import { Button } from 'semantic-ui-react';
import { useState } from 'react';
import './sideNav.css';
function Nav() {
  const [toggleNav, setToggleNav] = useState(false);
  const toggleHandler = () => {
    setToggleNav(!toggleNav);
  };
  return (
    <div>
      <nav>
        <div className="navSticky">
          <Button circular icon onClick={toggleHandler}>
            {toggleNav ? '' : ''}
          </Button>
          <ul className={`menuNav ${toggleNav ? ' showMenu' : ''}`}>
            <div className="designLink">
              <Link to="Design">Design</Link>
            </div>
            <div className="illusLink">
              <Link to="Illustration">Illustration</Link>
            </div>
            <div className="webLink">
              <Link to="Web">Web</Link>
            </div>
          </ul>
        </div>
        <div className="menu_desktop">
          <div className="ui grid">
            <div className="four wide column">
              <div className="ui vertical fluid tabular menu">
                <Link to="/" className="active item">
                  Home
                </Link>

                <Link to="Web" className="item">
                  Web
                </Link>

                <Link to="Design" className="item">
                  Design
                </Link>

                <Link to="Illustration" className="item">
                  Illustration
                </Link>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
}
export default Nav;
