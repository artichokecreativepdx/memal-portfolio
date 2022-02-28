import { Container } from 'semantic-ui-react';
import Sixteen from '../images/Graphic Design/16Web.jpg';
import Cinder from '../images/Graphic Design/cinderWeb.jpg';
import Larken from '../images/Graphic Design/larkenWeb.jpg';
function Design() {
  return (
    <div>
      <Container className="main">
        <div className="ui card">
          <img src={Sixteen} className="img-fluid" alt="16 robots logo" />
        </div>
        <div className="ui card">
          <img src={Cinder} className="img-fluid" alt="Cinder logo" />
        </div>
        <div className="ui card">
          <img src={Larken} className="img-fluid" alt="Larken logo" />
        </div>
      </Container>
    </div>
  );
}
export default Design;
