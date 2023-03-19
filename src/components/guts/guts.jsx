import './guts.css';
import Selfie from './selfie_2.png';
function Guts() {
  return (
    <div className="container">
      <section className="intro">
        <img src={Selfie} alt="self portrait intro" className="selfieImg" />
        <div className="introBox">
          <h1>Hi, my name is Megan</h1>
          <h3>I create unique, user-friendly websites.</h3>
        </div>
      </section>
    </div>
  );
}
export default Guts;
