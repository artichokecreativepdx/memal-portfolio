import { Image } from 'semantic-ui-react';
import moth1 from './images/moth1_small.png';
import moth2 from './images/moth2_small.png';
import moth3 from './images/moth3_small.png';
import selfie from './images/self_new.png';
import './guts.css';
function Guts() {
  return (
    <div>
      <div className="intro">
        <div className="mothBox">
          <h2 className="designer">Designer</h2>
          <div className="moths1">
            <Image src={moth1} size="tiny" alt="moth1" />
          </div>
        </div>
        <div className="mothBox">
          <h2 className="illustrator">Illustrator</h2>
          <div className="moths2">
            <Image src={moth2} size="small" alt="moth" />
          </div>
        </div>
        <div className="mothBox">
          <h2 className="developer">Developer</h2>
          <div className="moths3">
            <Image src={moth3} size="tiny" alt="moth" />
          </div>
          <Image className="selfie ui medium image" src={selfie} alt="me" />
        </div>
      </div>
    </div>
  );
}
export default Guts;
