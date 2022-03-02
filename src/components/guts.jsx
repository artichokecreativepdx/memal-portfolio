import moth1 from '../images/illus/moth1.png';
import moth2 from '../images/illus/moth2.png';
import moth3 from '../images/illus/moth3.png';
import './guts.css';
function Guts() {
  return (
    <div>
      <div className="guts">
        <div className="intro">
          <div className="mothBox">
            <h2 className="designer">Designer</h2>
            <div className="moths1">
              <img className="ui medium image" src={moth1} alt="moth1" />
            </div>
          </div>
          <div className="mothBox">
            <h2 className="illustrator">Illustrator</h2>
            <div className="moths2">
              <img className="ui small image" src={moth2} alt="moth" />
            </div>
          </div>
          <div className="mothBox">
            <h2 className="developer">Developer</h2>
            <div className="moths3">
              <img className="ui medium image" src={moth3} alt="moth" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Guts;
