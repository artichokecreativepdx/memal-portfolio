import logo from '../images/my_logo.svg';
import Nav from './sideNav';
function Head() {
  return (
    <div>
      <header className="head">
        <img src={logo} className="logo-image" alt="Logo" height={100} />
      </header>
      <Nav />
    </div>
  );
}
export default Head;
