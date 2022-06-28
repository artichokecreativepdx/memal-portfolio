import selfie from './self_new.png';
import './guts.css';
function Guts() {
  return (
    <div className="intro">
      <h2 className="designer">Designer</h2>

      <h2 className="illustrator">Illustrator</h2>

      <h2 className="developer">Developer</h2>

      <div className="selfieBox">
        <img src={selfie} width="300" className="selfieImg" alt="me" />
      </div>
    </div>
  );
}
export default Guts;
