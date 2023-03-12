import moth1 from './images/moth1_small.png';
import moth2 from './images/moth2_small.png';
import moth3 from './images/moth3_small.png';
import './footer.css';
function Footer() {
  return (
    <footer className="footer">
      <div className="socialMedia">
        <a href="https://github.com/artichokecreativepdx" target="blank">
          <ion-icon size="large" name="logo-github"></ion-icon>
        </a>

        <a href="https://www.instagram.com/dcartichoke/" target="blank">
          <ion-icon size="large" name="logo-instagram"></ion-icon>
        </a>

        <a href="https://www.linkedin.com/in/meganmaldonado/" target="blank">
          <ion-icon size="large" name="logo-linkedin"></ion-icon>
        </a>

        <a href="mailto:megan@memaldesigns.com">
          <ion-icon size="large" name="send"></ion-icon>
        </a>
      </div>
      <div className="mothBox">
        <div className="moths1">
          <img src={moth1} width="100" alt="moth1" />
        </div>

        <div className="moths2">
          <img src={moth2} width="100" alt="moth" />
        </div>

        <div className="moths3">
          <img src={moth3} width="100" alt="moth" />
        </div>
      </div>
      <p className="copyright">&copy; Megan Maldonado 2018</p>
    </footer>
  );
}
export default Footer;
