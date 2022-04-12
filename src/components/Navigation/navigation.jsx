import DesktopNav from './desktopNav';
import MobileNav from './mobileNav';
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
