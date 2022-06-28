import planIt from '../images/web/planit_home.png';

import grendels from '../images/web/grendels_screen.jpg';
import connection from '../images/web/cpr.jpg';

function WebProjects() {
  return (
    <>
      <div className="section_title_web">Web Development</div>
      <section>
        <img src={planIt} width="200" alt="Planit Adventures website" />

        <h2>PlanIt Adventures</h2>

        <h3>Project Details</h3>
        <hr />
        <p>
          Group project with the direction of Propel Projects creating MVP App
          to be showcased at the end of 8 weeks. Worked with Project manager,
          UX/UI, and Back-end persons to create fictional travel App using Ionic
          framework and React/ Typescript. The project concept was to create an
          app that suggests various travel destination based on a series of
          questions presented to the user.
        </p>
        <h3>Challenges</h3>
        <hr />
        <p>
          Learning Git and version control to work in tandem with the back-end
          developer.
        </p>
        <p>
          Coordinating with UX/UI person to establish visual language and user
          flow for the site.
        </p>
        <p>
          Learning Ionic React/Typescript with no prior experience, learned how
          to create components and make API calls
        </p>
        <hr />
        <h3>Tech Stack</h3>

        <img src={grendels} width="200" alt="grendels site" />

        <h2>Grendels Coffee Shop</h2>

        <h3>Project Details</h3>
        <hr />
        <p>
          Working with client to capture look and feel of cafe within the site,
          update cafe menu, add images, write product description, and create
          working contact page.
        </p>
        <p>Ensuring that the site was mobile first design.</p>
        <h3>Challenges</h3>
        <hr />
        <p>
          Working with foundation framework to create a clean, functional,
          mobile first website.
        </p>
        <p>
          Worked with owner to purchase the domain name and bring the site live.
        </p>
        <p>tried to establish a plan for the business social media accounts.</p>
        <br />
        <h3>Tech Stack</h3>

        <img src={connection} width="200" alt="connection pet rescue site" />

        <h2>Connection Pet Rescue</h2>

        <h3>Project Details</h3>
        <hr />
        <p>
          Worked with 501(c)(3), that provides shelter pets with homes,
          establishing and maintaining the website.
        </p>
        <p>
          Communicated with leadership regarding content and design of website.
        </p>
        <h3>Challenges</h3>
        <hr />
        <p>
          Challenges for the project involved working within the Rescue Groups
          established CMS framework with limited access to core files.
        </p>
        <p>
          Creating responsive site navigation that was formatted with tables in
          the layout.
        </p>

        <br />
        <h3>Tech Stack</h3>
      </section>
    </>
  );
}
export default WebProjects;
