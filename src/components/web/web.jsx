import { Image, Card, Grid } from 'semantic-ui-react';
import planIt from '../images/web/planit_home.jpg';
import stylish from '../images/web/stylish_gentleman.jpg';
import grendels from '../images/web/grendels_screen.jpg';
import connection from '../images/web/cpr.jpg';
import ionic from '../images/tech/ionic-icon.svg';
import react from '../images/tech/react.png';
import fastapi from '../images/tech/fastapi.png';
import typescript from '../images/tech/Typescript.png';
import affinity from '../images/tech/affinityDesigner.jpeg';
import foundation from '../images/tech/foundation.svg';
import htmlCluster from '../images/tech/htmlCluster.jpeg';
import sass from '../images/tech/sass.png';
import php from '../images/tech/php.png';
import ajax from '../images/tech/ajax.jpeg';
import './web.css';

function Web() {
  return (
    <Grid stackable padded centered>
      <div className="section_title_web">Web Development</div>
      <Card.Group>
        <Card>
          <Image
            src={planIt}
            className="Image-fluid"
            alt="Planit Adventures website"
          />
        </Card>

        <Card>
          <Card.Header>
            <h2>PlanIt Adventures</h2>
          </Card.Header>
          <Card.Description>
            <h3>Project Details</h3>
            <hr />
            <p>
              Group project with the direction of Propel Projects creating MVP
              App to be showcased at the end of 8 weeks. Worked with Project
              manager, UX/UI, and Back-end persons to create fictional travel
              App using Ionic framework and React/ Typescript. The project
              concept was to create an app that suggests various travel
              destination based on a series of questions presented to the user.
            </p>
            <h3>Challenges</h3>
            <hr />
            <p>
              Learning Git and version control to work in tandem with the
              back-end developer.
            </p>
            <p>
              Coordinating with UX/UI person to establish visual language and
              user flow for the site.
            </p>
            <p>
              Learning Ionic React/Typescript with no prior experience, learned
              how to create components and make API calls
            </p>
            <hr />
            <h3>Tech Stack</h3>

            <Image.Group size="mini">
              <Image
                src={ionic}
                className="Image-fluid"
                size="mini"
                alt="ionic logo"
              />

              <Image
                src={react}
                className="Image-fluid"
                size="mini"
                alt="react logo"
              />

              <Image
                src={typescript}
                className="Image-fluid"
                size="mini"
                alt="typescript logo"
              />
              <Image
                src={fastapi}
                className="Image-fluid"
                size="mini"
                alt="fastapi logo"
              />
            </Image.Group>
          </Card.Description>
        </Card>
      </Card.Group>
      <Card.Group centered>
        <Card>
          <Image src={grendels} className="image-fluid" alt="grendels site" />
        </Card>
        <Card>
          <Card.Content>
            <Card.Header>
              <h2>Grendels Coffee Shop</h2>
            </Card.Header>
            <Card.Description>
              <h3>Project Details</h3>
              <hr />
              <p>
                Working with client to capture look and feel of cafe within the
                site, update cafe menu, add images, write product description,
                and create working contact page.
              </p>
              <p>Ensuring that the site was mobile first design.</p>
              <h3>Challenges</h3>
              <hr />
              <p>
                Working with foundation framework to create a clean, functional,
                mobile first website.
              </p>
              <p>
                Worked with owner to purchase the domain name and bring the site
                live.
              </p>
              <p>
                tried to establish a plan for the business social media
                accounts.
              </p>
              <br />
              <h3>Tech Stack</h3>

              <Image.Group size="mini">
                <Image
                  src={htmlCluster}
                  className="Image-fluid"
                  size="mini"
                  alt="html  logo"
                />

                <Image
                  src={ajax}
                  className="Image-fluid"
                  size="mini"
                  alt="ajax logo"
                />
                <Image
                  src={affinity}
                  className="Image-fluid"
                  size="mini"
                  alt="affinity logo"
                />

                <Image
                  src={sass}
                  className="Image-fluid"
                  size="mini"
                  alt="sass logo"
                />
                <Image
                  src={foundation}
                  className="Image-fluid"
                  size="mini"
                  alt="foundation logo"
                />
              </Image.Group>
            </Card.Description>
          </Card.Content>
        </Card>
      </Card.Group>
      <Card.Group centered>
        <Card>
          <Image
            src={connection}
            className="image-fluid"
            alt="connection pet rescue site"
          />
        </Card>
        <Card>
          <Card.Content>
            <Card.Header>
              <h2>Connection Pet Rescue</h2>
            </Card.Header>
            <Card.Description>
              <h3>Project Details</h3>
              <hr />
              <p>
                Worked with 501(c)(3), that provides shelter pets with homes,
                establishing and maintaining the website.
              </p>
              <p>
                Communicated with leadership regarding content and design of
                website.
              </p>
              <h3>Challenges</h3>
              <hr />
              <p>
                Challenges for the project involved working within the Rescue
                Groups established CMS framework with limited access to core
                files.
              </p>
              <p>
                Creating responsive site navigation that was formatted with
                tables in the layout.
              </p>

              <br />
              <h3>Tech Stack</h3>

              <Image.Group size="mini">
                <Image
                  src={htmlCluster}
                  className="Image-fluid"
                  size="mini"
                  alt="htmllogo"
                />
              </Image.Group>
            </Card.Description>
          </Card.Content>
        </Card>
      </Card.Group>
      <Card.Group centered>
        <Card>
          <Image
            src={stylish}
            className="image-fluid"
            alt="stylish gentleman site"
          />
        </Card>
        <Card>
          <Card.Content>
            <Card.Header>
              <h2>Stylish Gentleman</h2>
            </Card.Header>
            <Card.Description>
              <h3>Project Details</h3>
              <hr />
              <p>
                Stylish Gentleman is a fictional high end Mens apparel shop.{' '}
              </p>
              <h3>Challenges</h3>
              <hr />
              <p>
                To conseptualize and execute landing page for a high end Mens
                apparel storefront.
              </p>
              <p>
                Create a brand and identity for the store that carried through
                to te site.
              </p>
              <p>
                create user stories and impliment UX/UI pricipals into design.
              </p>
              <br />
              <h3>Tech Stack</h3>

              <Image.Group size="mini">
                <Image
                  src={htmlCluster}
                  className="Image-fluid"
                  size="mini"
                  alt="htmllogo"
                />

                <Image
                  src={php}
                  className="Image-fluid"
                  size="mini"
                  alt="php logo"
                />
              </Image.Group>
            </Card.Description>
          </Card.Content>
        </Card>
      </Card.Group>
    </Grid>
  );
}
export default Web;
