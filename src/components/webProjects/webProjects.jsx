import planIt from '../images/web/planit_home.jpg';
import grendels from '../images/web/grendels_screen.jpg';
import connection from '../images/web/cpr.jpg';

import './webProjects.css';
function WebProjects() {
  const openInNewTab = (url) => {
    window.open(url, '_blank', 'noopener,noreferrer');
  };
  return (
    <section>
      <div className="section_title_web">
        <h1>Web Development</h1>
      </div>
      <div className="card">
        <img
          src={planIt}
          alt="planit site"
          className="image"
          height="400"
          width="200"
        />
        <div className="info">
          <p>
            Group project with the direction of Propel Projects creating MVP App
            to be showcased at the end of 8 weeks. Worked with Project manager,
            UX/UI, and Back-end persons to create fictional travel App using
            Ionic framework and React/ Typescript. The project concept was to
            create an app that suggests various travel destination based on a
            series of questions presented to the user.
          </p>
          <p>
            Learning Git and version control to work in tandem with the back-end
            developer. Coordinating with UX/UI person to establish visual
            language and user flow for the site. Learning Ionic React/Typescript
            with no prior experience, learned how to create components and make
            API calls.
          </p>
          <button
            onClick={(e) =>
              openInNewTab('https://github.com/artichokecreativepdx/travel-app')
            }
          >
            github
          </button>
        </div>
      </div>
      <div className="card">
        <img
          src={grendels}
          alt="grendelst site"
          className="image"
          height="400"
          width="200"
        />
        <div className="info">
          <p>
            Working with client to capture look and feel of cafe within the
            site, update cafe menu, add images, write product description, and
            create working contact page. Ensuring that the site was mobile first
            design.
          </p>
          <p>
            Working with foundation framework to create a clean, functional,
            mobile first website. Worked with owner to purchase the domain name
            and bring the site live. tried to establish a plan for the business
            social media accounts."
          </p>
          <button onClick={(e) => openInNewTab('https://grendelspdx.com/')}>
            Live Site
          </button>
        </div>
      </div>
      <div className="card">
        <img
          src={connection}
          alt="connection pet rescue site"
          className="image"
          height="400"
          width="200"
        />
        <div className="info">
          <p>
            Worked with 501(c)(3), that provides shelter pets with homes,
            establishing, designing, and maintaining the website. Communicated
            with leadership regarding content and design of website.
          </p>
          <p>
            Challenges for the project involved working within the Rescue Groups
            established CMS framework with limited access to core files.
            Creating responsive site navigation that was formatted with tables
            in the layout.
          </p>
        </div>
      </div>
    </section>
  );
}
export default WebProjects;
