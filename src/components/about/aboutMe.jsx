import './aboutMe.css';

import Resume from '../resume/MeganMaldonadoResume2022.pdf';

function AboutMe() {
  return (
    <section>
      <div className="section_title_about">
        <h2>About Me</h2>
        <div className="row profileAbout">
          <div className="one-half column">
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
          </div>
          <div className="one-half column">
            <p>
              Junior Web Developer with experience in HTML, Javascript, CSS,
              React, Wordpress Theming, and Typescript. In addition to coding, I
              have a background in Graphic Design, Illustration, and
              Photography. At this time I am working on sharpening my skills
              with REST API&apos;s, React hooks, and refactoring my existing
              code to become cleaner. In my spare time, I enjoy kayaking,
              digital painting and watching horror movies.
            </p>
          </div>
        </div>
      </div>

      <div className="available">
        <p>I am available for hire</p>
        <button>
          <a href={Resume} target="_blank" rel="noreferrer">
            Resum&eacute;
          </a>
        </button>
      </div>
    </section>
  );
}
export default AboutMe;
