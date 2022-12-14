import './designProjects.css';
import Sixteen from './images/16logoFull.png';
import SixteenBiz from './images/16Robotsbusiness.jpg';
import SixteenFront from './images/16BizFront.jpg';
import SixteenBack from './images/16BizBack.jpg';
import Planit from './images/planit.png';
import PlanitWeb from './images/planit_home.jpg';
import Larken from './images/Larken_camp.png';
function DesignProjects() {
  return (
    <section>
      <div className="section_title_web">
        <h2>Design</h2>
      </div>
      <div className="card">
        <h3 className="cardName">Sixteen Robots</h3>
        <div className="cardImg">
          <img
            src={Sixteen}
            alt="sixteen robots logo"
            className="image"
            width="100"
          />
          <img
            src={SixteenFront}
            alt="sixteen robots front business card"
            className="image"
            height="100"
          />
          <img
            src={SixteenBiz}
            alt="sixteen robots business cards "
            className="image"
            height="100"
          />
          <img
            src={SixteenBack}
            alt="sixteen robots back business card"
            className="image"
            height="100"
          />
        </div>
        <div className="cardInfo">
          <p>
            16 Robots is a leather crafter out of Portland Oregon focusing on
            non-traditional. leather engraving. The concept behind the logo was
            based on soviet era space-race poster design. The R in the logo was
            designed to resemble a space ship and with the intention of making a
            stamp for leather working. I worked with the client to source a
            leather stamp maker that creates custom stamps for thicker leather.
          </p>
        </div>
      </div>
      <div className="card">
        <h3 className="cardName">Planit Adventures</h3>
        <div className="cardImg">
          <img
            src={Planit}
            alt="planit adventures"
            className="image"
            width="100"
          />
          <img
            src={PlanitWeb}
            alt="planit adventures home"
            className="image"
            width="100"
          />
          {/* <img
            src={SixteenBiz}
            alt="sixteen robots business cards "
            className="image"
            height="100"
          />
          <img
            src={SixteenBack}
            alt="sixteen robots back business card"
            className="image"
            height="100"
          /> */}
        </div>

        <div className="cardInfo">
          <p>
            The concept for the Planit Adventures logo was based off the idea
            of, “checking off “, different locations a person visits on the
            recommendation of the app.
          </p>
        </div>
      </div>
      <div className="card">
        <h3 className="cardName">Larken Camp</h3>
        <div className="cardImg">
          <img
            src={Larken}
            alt="larken camp logo"
            className="image"
            width="100"
          />
          {/* <img
            src={PLanitWeb}
            alt="planit adventures home"
            className="image"
            width="100"
          />
          <img
            src={SixteenBiz}
            alt="sixteen robots business cards "
            className="image"
            height="100"
          />
          <img
            src={SixteenBack}
            alt="sixteen robots back business card"
            className="image"
            height="100"
          /> */}
        </div>

        <div className="cardInfo">
          <p>
            Larken Camp is a fictional App designed to help people get access to
            campsites that are off the beaten path. As someone who enjoys
            camping at primitive campsites but has a hard time with the
            Government sites, I decided to create an app where it would be
            easier to locate the campsites and get images of the area.
          </p>
        </div>
      </div>
    </section>
  );
}
export default DesignProjects;
