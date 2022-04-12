import { Icon } from 'semantic-ui-react';
import Contact from '../contact/contact';
import './footer.css';
function Footer() {
  return (
    <footer className="footer">
      <Contact />
      <div className="socialMedia">
        <a href="https://github.com/artichokecreativepdx" target="blank">
          <Icon circular size="big" name="github" />
        </a>
        <a href="https://www.instagram.com/dcartichoke/" target="blank">
          <Icon circular size="big" name="instagram" />
        </a>
        <a href="https://www.linkedin.com/in/meganmaldonado/" target="blank">
          <Icon circular size="big" name="linkedin" />
        </a>
      </div>

      <p className="copyright">© Megan Maldonado 2018</p>
    </footer>
  );
}
export default Footer;
