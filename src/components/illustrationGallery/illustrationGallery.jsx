import './illustrationGallery.css';
import atlas from './illus/atlasMoth.jpg';
import emporor from './illus/empororMoth.jpg';
import silk from './illus/giantSilk.jpg';
import lantern from './illus/lanternBug.jpg';
import luna from './illus/lunaMoth.jpg';
import sphinx from './illus/sphinxMoth.jpg';
import tiger from './illus/tigerMoth.jpg';
import anthrax from './illus/anthrax.jpg';
import bears from './illus/bears.jpg';
import electric from './illus/electric.jpg';
import doll from './illus/doll.jpg';
import woods from './illus/in_the_woods.jpg';
import waitress from './illus/waitress.jpg';
import birds from './illus/birds.jpg';

function IllustrationGallery() {
  return (
    <section>
      <div className="section_title_illustration">
        <h1>Illustration</h1>
        <div className="illusBox">
          <div className="digital">
            <img src={lantern} className="images" alt="lantern bug" />

            <img src={luna} className="images" effect="blur" alt="luna moth" />

            <img src={sphinx} className="images" alt="sphinx moth" />

            <img src={tiger} className="images" alt="tiger moth" />

            <img src={silk} className="images" effect="blur" alt="silk moth" />

            <img src={atlas} className="images" alt="atlas moth" />

            <img src={emporor} className="images" alt="emporor moth" />
          </div>

          <h2>Acrylic and Oil</h2>
          <div className="acrOil">
            <img src={anthrax} className="images" alt="anthrax painting" />

            <img src={birds} className="images" alt="cicada painting" />

            <img src={bears} className="images" alt="bear painting" />

            <img src={electric} className="images" alt="electric painting" />

            <img src={doll} className="images" alt="doll painting" />

            <img src={woods} className="images" alt="woods painting" />

            <img src={waitress} className="images" alt="waitress painting" />
          </div>
        </div>
      </div>
    </section>
  );
}
export default IllustrationGallery;
