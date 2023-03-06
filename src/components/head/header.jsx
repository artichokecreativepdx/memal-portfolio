import logo from './images/my_logo2022.svg';

import './head.css';
function Header() {
  return (
    <header className="head">
      <img src={logo} className="logo-image" alt="Logo" height={100} />
    </header>
  );
}
export default Header;
