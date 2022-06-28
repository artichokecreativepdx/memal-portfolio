import './about.css';
import Selfie from '../images/selfie.png';
import Resume from '../resume/MeganMaldonadoResume2022.pdf';
import ionic from '../images/tech/ionic-icon.svg';
import react from '../images/tech/react.png';
import fastapi from '../images/tech/fastapi.png';
import typescript from '../images/tech/Typescript.png';
import affinity from '../images/tech/affinityDesigner.jpeg';
import foundation from '../images/tech/foundation.svg';
import js from '../images/tech/js.png';
import sass from '../images/tech/sass.png';
import php from '../images/tech/php.png';
import ajax from '../images/tech/ajax.jpeg';
import html from '../images/tech/html.png';
import css from '../images/tech/css.png';
function AboutMe() {
  return (
    <div>
      <section>
        <img src={Selfie} width="300" alt="selfie" />

        <p>
          Junior Web Developer with experience in HTML, Javascript, CSS, React,
          Wordpress Theming, and Typescript. In addition to coding, I have a
          background in Graphic Design, Illustration, and Photography. At this
          time I am working on sharpining my skills with REST API&apos;s, React
          hooks, and Refractoring my existing code to become cleaner. In my
          spare time, I enjoy kyaking, digital painting and watching horror
          movies.
        </p>
      </section>
      <section>
        <h3>Skills</h3>
        <ul>
          <li> Web Development/ Design</li>
          <li>Graphic design</li>
          <li>UX/UI design</li>
          <li>Computer &amp; hand Illustration</li>
          <li>Logo &amp; identity design</li>
          <li>Usability testing</li>
          <li> Photography</li>
          <li> Writing for SEO</li>
          <li>Video editing</li>
        </ul>

        <h3>languages, Libraries, Frameworks, APIS AND Platforms</h3>

        <img src={js} width="25" alt="js logo" />

        <img src={typescript} width="25" alt="typescript logo" />

        <img src={php} width="25" alt="php logo" />
        <img src={react} width="25" alt="react logo" />

        <img src={ionic} width="25" alt="ionic logo" />

        <img
          src={affinity}
          className="Image-fluid"
          width="25"
          alt="affinity logo"
        />

        <img src={foundation} width="25" alt="foundation logo" />
        <img src={fastapi} width="25" alt="fast api logo" />
        <img src={sass} width="25" alt="sass logo" />
        <img src={ajax} width="25" alt="ajax logo" />
        <img src={html} width="25" alt="html logo" />
        <img src={css} width="25" alt="css logo" />
      </section>
      <section>
        I am available for hire
        <button>
          <a href={Resume} target="_blank" rel="noreferrer">
            Resume
          </a>
        </button>
      </section>
    </div>
  );
}
export default AboutMe;
