import './guts.css';
import Selfie from './selfie_2.png';
function Guts() {
  return (
    <div className="intro">
      <img src={Selfie} alt="self portrait intro" height={300} />
      <div className="introBox">
        <h1>Hi, my name is Megan</h1>
        <h3>I create unique, user-friendly websites.</h3>
      </div>
    </div>
  );
}
export default Guts;
