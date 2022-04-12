import { Image, Grid, Segment } from 'semantic-ui-react';
import Sixteen from '../images/design/16Web.jpg';
// import SixteenRobts from '../images/design/16logoFull.png';
// import SixteenBiz from '../images/design/16Robotsbusiness.jpg';
// import SixteenR from '../images/design/16logoR.png';

import Cinder from '../images/design/cinderWeb.jpg';
// import CinderLogo from '../images/design/cinderLogo.png';

// import StylishLogo from '../images/design/sg_logo.png';
// import StylishSite from '../images/design/web/stylish_gentleman.jpg';

// import PlanitLogo from '../images/design/planit.png';
// import PlanitSite from '../images/design/web/planit_home.png';

// import LarkenLogo from '../images/design/Larken_camp.png';
import LarkenSite from '../images/design/larkenWeb.jpg';
import './design.css';
function Design() {
  return (
    <Grid stackable padded columns={2}>
      <div className="section_title_design">Graphic Design</div>

      {/* <Grid.Column id="sxtn_gry">
        <Segment className="ui card">
          <Image
            src={SixteenRobts}
            centered
            className="Image-fluid"
            alt="16 robots long logo"
          />
        </Segment>
      </Grid.Column> */}

      {/* <Grid.Column>
        <Segment className="ui card">
          <Image
            src={SixteenBiz}
            centered
            className="Image-fluid"
            alt="16 robots buisness cards"
          />
        </Segment>
      </Grid.Column> */}

      <Grid.Column>
        <Segment className="ui card sxtn_brn">
          <Image
            src={Sixteen}
            centered
            className="Image-fluid"
            alt="16 robots R logo"
          />
        </Segment>
      </Grid.Column>
      {/* <Grid.Column>
        <Segment className="ui card">
          <Image
            src={SixteenR}
            centered
            size="mini"
            className="Image-fluid"
            alt="16 robots logo"
          />
        </Segment>
      </Grid.Column> */}

      {/* <Grid.Column>
        <Segment className="ui card plnit_purple">
          <Image
            src={PlanitLogo}
            centered
            className="image-fluid"
            alt="Planit adventures logo"
          />
        </Segment>
      </Grid.Column>
      <Grid.Column>
        <Segment className="ui card">
          <Image
            src={PlanitSite}
            centered
            className="Image-fluid"
            alt="Planit adventures website"
          />
        </Segment>
      </Grid.Column>

      <Grid.Column>
        <Segment className="ui card stylsh_grn">
          <Image
            src={StylishLogo}
            centered
            className="stylsh_grn"
            alt="Stylish gent logo"
          />
        </Segment>
      </Grid.Column>
      <Grid.Column>
        <Segment className="ui card">
          <Image
            src={StylishSite}
            centered
            className="Image-fluid"
            alt="Stylish gent website"
          />
        </Segment>
      </Grid.Column>

      <Grid.Column>
        <Segment className="ui card">
          <Image
            src={CinderLogo}
            centered
            className="Image-fluid"
            alt="Cinder site"
          />
        </Segment>
      </Grid.Column> */}
      <Grid.Column>
        <Segment className="ui card">
          <Image
            src={Cinder}
            centered
            className="Image-fluid"
            alt="Cinder logo"
          />
        </Segment>
      </Grid.Column>

      {/* <Grid.Column>
        <Segment className="ui card">
          <Image
            src={LarkenLogo}
            centered
            className="Image-fluid"
            alt="Larken logo"
          />
        </Segment>
      </Grid.Column> */}
      <Grid.Column>
        <Segment className="ui card">
          <Image
            src={LarkenSite}
            centered
            className="Image-fluid"
            alt="Larken logo"
          />
        </Segment>
      </Grid.Column>
    </Grid>
  );
}
export default Design;
