import { Image } from 'semantic-ui-react';
import Sixteen from '../images/Graphic Design/16Web.jpg';
import SixteenRobts from '../images/Graphic Design/16logoFull.png';
import SixteenBiz from '../images/Graphic Design/16Robotsbusiness.jpg';
import SixteenR from '../images/Graphic Design/16logoR.png';

import Cinder from '../images/Graphic Design/cinderWeb.jpg';
import CinderLogo from '../images/Graphic Design/cinderLogo.png';

import StylishLogo from '../images/Graphic Design/sg_logo.png';
import StylishSite from '../images/web/stylish_gentleman.jpg';

import PlanitLogo from '../images/Graphic Design/planit.png';
import PlanitSite from '../images/web/planit_home.png';

import LarkenLogo from '../images/Graphic Design/Larken_camp.png';
import LarkenSite from '../images/Graphic Design/larkenWeb.jpg';
import './design.css';
function Design() {
  return (
    <div>
      <div className="section_title_design">Graphic Design</div>

      <div className="ui card">
        <Image
          src={SixteenRobts}
          className=""
          size="medium"
          bordered
          alt="16 robots long logo"
        />
      </div>
      <div className="ui card">
        <Image
          src={SixteenBiz}
          className=""
          size="medium"
          bordered
          alt="16 robots buisness cards"
        />
      </div>
      <div className="ui card">
        <Image src={SixteenR} className="Image-fluid" alt="16 robots R logo" />
      </div>
      <div className="ui card">
        <Image src={Sixteen} className="Image-fluid" alt="16 robots logo" />
      </div>

      <div className="ui card">
        <Image
          src={PlanitLogo}
          className="Image-fluid"
          alt="Planit adventures logo"
        />
      </div>
      <div className="ui card">
        <Image
          src={PlanitSite}
          className="Image-fluid"
          alt="Planit adventures website"
        />
      </div>
      <div className="ui card">
        <Image
          src={StylishLogo}
          className="Image-fluid"
          alt="Stylish gent logo"
        />
      </div>
      <div className="ui card">
        <Image
          src={StylishSite}
          className="Image-fluid"
          alt="Stylish gent website"
        />
      </div>

      <div className="ui card">
        <Image src={Cinder} className="Image-fluid" alt="Cinder site" />
      </div>
      <div className="ui card">
        <Image src={CinderLogo} className="Image-fluid" alt="Cinder logo" />
      </div>

      <div className="ui card">
        <Image src={LarkenLogo} className="Image-fluid" alt="Larken logo" />
      </div>
      <div className="ui card">
        <Image src={LarkenSite} className="Image-fluid" alt="Larken logo" />
      </div>
    </div>
  );
}
export default Design;
