import selfie from '../images/self_new.png';
function About() {
  return (
    <div>
      <section id="about">
        <div className="ui centered card">
          <img className="ui medium image" src={selfie} alt="me" />
          <section className="about-me-text">
            <h2 className="about_me">What am I about?</h2>
            <p className="passions">
              I am passionate about design, whether it be web or print. At this
              time I am working on increasing my knowledge of different
              frameworks and learning how to create more dynamic websites. My
              excitement for this medium is that it is always growing and
              evolving.
            </p>
          </section>
        </div>
      </section>

      <div className="profile">
        <div className="ui card">
          <div className="profile">
            <h1 className="heading">Professional Profile</h1>
          </div>
          <div className="college">
            <p className="date">2017</p>
            <p>
              Portland Community College Website development and design
              Associates of applied science.
            </p>
            <p className="date">2010</p>
            <p>
              School of visual concepts Studied graphic design, Front end web
              development/design, printmaking.
            </p>
            <p className="date">2009</p>
            <p>
              Austin Peay State University Studied graphic design and
              photography
            </p>
            <p className="date">2007</p>
            <p>
              San Diego Community college Studied graphic design and
              illustration
            </p>
          </div>
          <section className="skills">
            <h2>Skills</h2>
            <hr />
            <ul>
              <li>Web Development/ Design</li>
              <li>Usability testing</li>
              <li>Graphic design</li>
              <li>UX/UI design</li>
              <li>Video editing</li>
              <li>Photography</li>
              <li>Computer &amp; hand Illustration</li>
              <li>Logo and identity design</li>
              <li>Writing for SEO</li>
            </ul>
            <p>&nbsp;</p>
            <h2>Languages</h2>
            <hr />
            <ul>
              <li>CSS/ Sass</li>
              <li>HTML</li>
              <li>JavaScript</li>
              <li>React</li>
              <li>PHP</li>
              <li>MySQL</li>
            </ul>
            <p>&nbsp;</p>
            <h2>Programs</h2>
            <hr />
            <ul>
              <li>Adobe Creative Suite</li>
              <li>Affinity Designer, Photo, and Publisher</li>
              <li>VS Code</li>
              <li>Git Hub</li>
            </ul>
          </section>
        </div>
      </div>
    </div>
  );
}
export default About;
