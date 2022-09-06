import DesktopNav from './desktopNav';
import MobileNav from './mobileNav';
import './navigation.css';
function Nav() {
  return (
    <div className="navMenu">
      <DesktopNav />
      <MobileNav />
    </div>
  );
}
export default Nav;
