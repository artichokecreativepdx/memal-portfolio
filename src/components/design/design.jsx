import { Image, Segment } from 'semantic-ui-react';

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
    <Segment>
      <div className="section_title_design">Graphic Design</div>

      <Image
        src={SixteenRobts}
        centered
        className="Image-fluid"
        alt="16 robots long logo"
      />

      <Image
        src={SixteenBiz}
        centered
        className="Image-fluid"
        alt="16 robots buisness cards"
      />

      <Image
        src={PlanitLogo}
        centered
        className="image-fluid"
        alt="Planit adventures logo"
      />

      <Image
        src={PlanitSite}
        centered
        className="Image-fluid"
        alt="Planit adventures website"
      />

      <Image
        src={StylishLogo}
        centered
        className="stylsh_grn"
        alt="Stylish gent logo"
      />

      <Image
        src={StylishSite}
        centered
        className="Image-fluid"
        alt="Stylish gent website"
      />

      <Image
        src={CinderLogo}
        centered
        className="Image-fluid"
        alt="Cinder site"
      />

      <Image src={Cinder} centered className="Image-fluid" alt="Cinder logo" />

      <Image
        src={LarkenLogo}
        centered
        className="Image-fluid"
        alt="Larken logo"
      />

      <Image
        src={LarkenSite}
        centered
        className="Image-fluid"
        alt="Larken logo"
      />
    </Segment>
  );
}
export default Design;
