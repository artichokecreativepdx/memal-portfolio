import atlas from '../images/illus/atlasMoth.png';
import emporor from '../images/illus/empororMoth.png';
import silk from '../images/illus/giantSilk.png';
import latern from '../images/illus/lanternBug.png';
import lunas from '../images/illus/lunaMoth.png';
import sphinx from '../images/illus/sphinxMoth.png';
import tiger from '../images/illus/tigerMoth.png';
import anthrax from '../images/illus/anthrax.jpg';
import bears from '../images/illus/bears.jpg';
import electric from '../images/illus/electric.jpg';
import doll from '../images/illus/doll.jpg';
import woods from '../images/illus/in_the_woods.jpg';
import waitress from '../images/illus/waitress.jpg';
import './illustration.css';

function Illustration() {
  return (
    <div>
      <div className="section_title_illustration">Illustration</div>
      <div className="moth_illus">
        <div className="ui medium rounded image">
          <img src={atlas} className="img-fluid" alt="atlas moth" />
        </div>

        <div className="ui medium rounded image">
          <img src={emporor} className="img-fluid" alt="emporor moth" />
        </div>

        <div className="ui medium rounded image">
          <img src={silk} className="img-fluid" alt="silk moth" />
        </div>

        <div className="ui medium rounded image">
          <img src={latern} className="img-fluid" alt="lantern bug" />
        </div>

        <div className="ui medium rounded image">
          <img src={lunas} className="img-fluid" alt="luna moth" />
        </div>
        <div className="ui medium rounded image">
          <img src={sphinx} className="img-fluid" alt="sphinx moth" />
        </div>
        <div className="ui medium rounded image">
          <img src={tiger} className="img-fluid" alt="tiger moth" />
        </div>
      </div>

      <hr />

      <div className="ui medium rounded image">
        <img
          src={electric}
          className="img-fluid"
          width={300}
          alt="electric painting"
        />
      </div>
      <div className="ui medium rounded image">
        <img
          src={bears}
          className="img-fluid"
          width={300}
          alt="bears painting"
        />
      </div>
      <div className="ui medium rounded image">
        <img
          src={anthrax}
          className="img-fluid"
          width={300}
          alt="anthrax painting"
        />
      </div>

      <hr />
      <img src={doll} className="img-fluid" alt="doll painting" width={300} />
      <img src={woods} className="img-fluid" alt="wood painting" width={300} />
      <img
        src={waitress}
        className="img-fluid"
        alt="watress painting"
        width={300}
      />
    </div>
  );
}
export default Illustration;
