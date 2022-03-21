import planIt from '../images/web/planit_home.png';
import stylish from '../images/web/stylish_gentleman.jpg';
import grendels from '../images/web/grendels_screen.jpg';
import connection from '../images/web/cpr.png';

function Web() {
  return (
    <div>
      <div className="section_title">Website Creation</div>

      <div classname="ui cards">
        <div className="ui card">
          <div className="image">
            <img src={planIt} className="" alt="PlanIt Adventures Site" />
          </div>
          <div className="header">
            <h2>PlanIt Adventures</h2>
            <div className="description">
              <h3>Project Details</h3>
              <hr />
              <p>
                Group project with the direction of Propel Projects creating MVP
                App to be showcased at the end of 8 weeks. Worked with Project
                manager, UX/UI, and Back-end persons to create fictional travel
                App using Ionic framework and React/ Typescript. The project
                concept was to create an app that suggests various travel
                destination based on a series of questions presented to the
                user.
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
                Learning Ionic React/Typescript with no prior experience,
                learned how to create components and make API calls
              </p>
            </div>
          </div>
          <div className="ui card">
            <img src={grendels} className="image" alt="grendels site" />

            <div className="header">
              <h2>Grendels Coffee Shop</h2>
              <div className="description">
                <h3>Project Details</h3>
                <hr />
                <p>
                  Working with client to capture look and feel of cafe within
                  the site, update cafe menu, add images, write product
                  description, and create working contact page.
                </p>
                <p>Ensuring that the site was mobile first design.</p>
                <h3>Challenges</h3>
                <hr />
                <p>
                  Working with foundation framework to create a clean,
                  functional, mobile first website.
                </p>
                <p>
                  Worked with owner to purchase the domain name and bring the
                  site live.
                </p>
                <p>
                  tried to establish a plan for the business social media
                  accounts.
                </p>
                <br />
                <p>Follow link to see live site</p>
              </div>
            </div>
          </div>
        </div>
        <div className="ui card">
          <img
            src={connection}
            className="image"
            alt="connection pet rescue site"
          />

          <div className="header">
            <h2>Connection Pet Rescue</h2>
            <div className="description">
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
            </div>
          </div>
        </div>

        <div className="ui card">
          <img src={stylish} className="image" alt="stylish gentleman site" />

          <div className="header">
            <h2>Stylish Gentleman</h2>
            <div className="description">
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
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Web;
