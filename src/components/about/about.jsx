import { Image, Segment, Button, List, Divider } from 'semantic-ui-react';
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
      <Segment>
        <Image src={Selfie} size="small" rounded centered />
        <Divider />
        <p>
          Junior Web Developer with experience in HTML, Javascript, CSS, React,
          Wordpress Theming, and Typescript. In addition to coding, I have a
          background in Graphic Design, Illustration, and Photography. At this
          time I am working on sharpining my skills with REST API&apos;s, React
          hooks, and Refractoring my existing code to become cleaner. In my
          spare time, I enjoy kyaking, digital painting and watching horror
          movies.
        </p>
      </Segment>
      <Segment>
        <h3>Skills</h3>
        <List>
          <List.Item> Web Development/ Design</List.Item>
          <List.Item>Graphic design</List.Item>
          <List.Item>UX/UI design</List.Item>
          <List.Item>Computer &amp; hand Illustration</List.Item>
          <List.Item>Logo &amp; identity design</List.Item>
          <List.Item>Usability testing</List.Item>
          <List.Item> Photography</List.Item>
          <List.Item> Writing for SEO</List.Item>
          <List.Item>Video editing</List.Item>
        </List>

        <h3>languages, Libraries, Frameworks, APIS AND Platforms</h3>
        <Divider />
        <Image.Group size="mini">
          <Image src={js} className="Image-fluid" size="mini" alt="js logo" />

          <Image
            src={typescript}
            className="Image-fluid"
            size="mini"
            alt="typescript logo"
          />

          <Image src={php} className="Image-fluid" size="mini" alt="php logo" />
          <Image
            src={react}
            className="Image-fluid"
            size="mini"
            alt="react logo"
          />

          <Image
            src={ionic}
            className="Image-fluid"
            size="mini"
            alt="ionic logo"
          />

          <Image
            src={affinity}
            className="Image-fluid"
            size="mini"
            alt="affinity logo"
          />

          <Image
            src={foundation}
            className="Image-fluid"
            size="mini"
            alt="foundation logo"
          />
          <Image
            src={fastapi}
            className="Image-fluid"
            size="mini"
            alt="fast api logo"
          />
          <Image
            src={sass}
            className="Image-fluid"
            size="mini"
            alt="sass logo"
          />
          <Image
            src={ajax}
            className="Image-fluid"
            size="mini"
            alt="ajax logo"
          />
          <Image
            src={html}
            className="Image-fluid"
            size="mini"
            alt="html logo"
          />
          <Image src={css} className="Image-fluid" size="mini" alt="css logo" />
        </Image.Group>
      </Segment>
      <Segment>
        I am available for hire
        <Button>
          <a href={Resume} target="_blank" rel="noreferrer">
            Resume
          </a>
        </Button>
      </Segment>
    </div>
  );
}
export default AboutMe;
