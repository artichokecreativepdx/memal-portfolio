import DesktopNav from './Navigation/desktopNav';
import MobileNav from './Navigation/mobileNav';
function Nav() {
  return (
    <div>
      <nav>
        <MobileNav />

        <DesktopNav />
      </nav>
    </div>
  );
}
export default Nav;
