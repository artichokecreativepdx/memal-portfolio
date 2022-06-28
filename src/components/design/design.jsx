import SixteenRobts from '../images/design/16logoFull.png';
import SixteenBiz from '../images/design/16Robotsbusiness.jpg';

import Cinder from '../images/design/cinderWeb.jpg';
import CinderLogo from '../images/design/cinderLogo.png';

import StylishLogo from '../images/design/sg_logo.png';
import StylishSite from '../images/design/stylish_gentleman.jpg';

import PlanitLogo from '../images/design/planit.png';
import PlanitSite from '../images/design/planit_home.png';

import LarkenLogo from '../images/design/Larken_camp.png';
import LarkenSite from '../images/design/larkenWeb.jpg';
import './design.css';
function Design() {
  return (
    <section>
      <div className="section_title_design">Graphic Design</div>

      <img
        src={SixteenRobts}
        className="Image-fluid"
        alt="16 robots long logo"
      />

      <img
        src={SixteenBiz}
        className="Image-fluid"
        alt="16 robots buisness cards"
      />

      <img
        src={PlanitLogo}
        className="image-fluid"
        alt="Planit adventures logo"
      />

      <img
        src={PlanitSite}
        className="Image-fluid"
        alt="Planit adventures website"
      />

      <img src={StylishLogo} className="stylsh_grn" alt="Stylish gent logo" />

      <img
        src={StylishSite}
        className="Image-fluid"
        alt="Stylish gent website"
      />

      <img src={CinderLogo} className="Image-fluid" alt="Cinder site" />

      <img src={Cinder} className="Image-fluid" alt="Cinder logo" />

      <img src={LarkenLogo} className="Image-fluid" alt="Larken logo" />

      <img src={LarkenSite} className="Image-fluid" alt="Larken logo" />
    </section>
  );
}
export default Design;
