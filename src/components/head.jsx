import logo from '../images/my_logo.svg';
import Nav from './sideNav';
function Head() {
  return (
    <div className="nav">
      <header className="head">
        <img src={logo} className="logo-image" alt="Logo" height={100} />
        <Nav />
      </header>
    </div>
  );
}
export default Head;
