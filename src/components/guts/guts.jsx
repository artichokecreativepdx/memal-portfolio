import './guts.css';
import Selfie from './selfie_2.png';
function Guts() {
  return (
    <div className="intro">
      <img src={Selfie} alt="self portrait intro" height={300} />
      <div className="introBox">
        <h4>
          My name is Megan Maldonado and I am a Creative Developer out of
          Portland, Oregon
        </h4>
      </div>
    </div>
  );
}
export default Guts;
