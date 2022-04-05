import { Image, Grid, Segment } from 'semantic-ui-react';
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
    <Grid stackable columns={2}>
      <Segment className="section_title_design">Graphic Design</Segment>

      <Grid.Column id="sxtn_gry">
        <Segment className="ui card">
          <Image
            src={SixteenRobts}
            centered
            className="Image-fluid"
            alt="16 robots long logo"
          />
        </Segment>
      </Grid.Column>

      <Grid.Column>
        <Segment className="ui card">
          <Image
            src={SixteenBiz}
            centered
            className="Image-fluid"
            alt="16 robots buisness cards"
          />
        </Segment>
      </Grid.Column>

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
      <Grid.Column>
        <Segment className="ui card">
          <Image
            src={SixteenR}
            centered
            size="mini"
            className="Image-fluid"
            alt="16 robots logo"
          />
        </Segment>
      </Grid.Column>

      <Grid.Column>
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
      </Grid.Column>
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

      <Grid.Column>
        <Segment className="ui card">
          <Image
            src={LarkenLogo}
            centered
            className="Image-fluid"
            alt="Larken logo"
          />
        </Segment>
      </Grid.Column>
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
