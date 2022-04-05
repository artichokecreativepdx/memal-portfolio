import { Icon } from 'semantic-ui-react';
import Contact from './contact';
function Footer() {
  return (
    <footer>
      <Contact />
      <div className="socialMedia">
        <a href="https://github.com/artichokecreativepdx" target="blank">
          <Icon circular name="github" />
        </a>
        <a href="https://www.instagram.com/dcartichoke/" target="blank">
          <Icon circular name="instagram" />
        </a>
        <a href="https://www.linkedin.com/in/meganmaldonado/" target="blank">
          <Icon circular name="linkedin" />
        </a>
      </div>

      <p className="copyright">© Megan Maldonado 2018</p>
    </footer>
  );
}
export default Footer;
