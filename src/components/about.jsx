import { Image, Grid } from 'semantic-ui-react';
import './about.css';

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
function About() {
  return (
    <Grid divided="vertically">
      <Grid.Row>
        I am passionate about design, whether it be web or print. At this time I
        am working on increasing my knowledge of different frameworks and
        learning how to create more dynamic websites. My excitement for this
        medium is that it is always growing and evolving.
      </Grid.Row>

      <Grid.Row columns={2}>
        <Grid.Column>
          <h3>Skills</h3>
          <hr />
          Web Development/ Design Usability testing Graphic design UX/UI design
          Video editing Photography Computer &amp; hand Illustration Logo and
          identity design Writing for SEO
        </Grid.Column>

        <Grid.Column>
          <h3>languages,Libraries, Frameworks, APIS AND Platforms</h3>
          <hr />

          <Image.Group size="mini">
            <Image src={js} className="Image-fluid" size="mini" alt="js logo" />

            <Image
              src={typescript}
              className="Image-fluid"
              size="mini"
              alt="typescript logo"
            />

            <Image
              src={php}
              className="Image-fluid"
              size="mini"
              alt="php logo"
            />
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
            <Image
              src={css}
              className="Image-fluid"
              size="mini"
              alt="css logo"
            />
          </Image.Group>
        </Grid.Column>
      </Grid.Row>
    </Grid>
  );
}
export default About;
