import { Container } from 'semantic-ui-react';
import About from '../components/about';
import moth1 from '../images/illus/moth1.png';
import moth2 from '../images/illus/moth2.png';
import moth3 from '../images/illus/moth3.png';

function Home() {
  return (
    <div>
      <Container className="main">
        <div className="guts">
          <div className="moths">
            <img className="ui small image" src={moth1} alt="moth1" />
            <img className="ui small image" src={moth2} alt="moth" />
            <img className="ui small image" src={moth3} alt="moth" />
            <h2 className="intro">
              Hello, <br /> I am Megan Maldonado <br /> Designer, Developer
              &amp; Illustrator located in Portland,Oregon
            </h2>
          </div>
        </div>
        <About />
      </Container>
    </div>
  );
}
export default Home;
