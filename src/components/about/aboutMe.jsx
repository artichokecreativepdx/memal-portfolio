import './aboutMe.css';
import Lantern from '../images/lanternBug.png';
import Resume from '../resume/MeganMaldonadoResume2022.pdf';

function AboutMe() {
  return (
    <section>
      <div className="card">
        <div className="selfLantern">
          <img src={Lantern} alt="selfie" height={200} />
        </div>
        <div className="aboutMe">
          <p>
            Hi there, I'm Megan, a Creative Developer with a passion for
            creating beautiful and functional digital experiences. I specialize
            in using design and code to bring ideas to life and make them
            accessible to a wider audience.
          </p>
          <p>
            I believe that design and development are two sides of the same
            coin, and that the best products come from a seamless integration of
            both disciplines. That's why I approach each project with a holistic
            mindset, considering everything from the user experience to the
            underlying code architecture.
          </p>
          <p>
            My design skills are informed by a deep appreciation for aesthetics
            and a commitment to user-centered design. I'm passionate about
            creating interfaces that are intuitive, visually stunning, and easy
            to use. Whether I'm designing a logo, crafting a website, or
            developing an app, I'm always thinking about how I can create a
            delightful user experience that meets the needs of both clients and
            users.
          </p>
          <p>
            As a developer, I'm always looking for new ways to improve my craft
            and stay on the cutting edge of technology. Whether it's learning a
            new programming language, experimenting with a new framework, or
            exploring a new API, I'm always excited to take on new challenges
            and expand my skills.
          </p>
          <p>
            When I'm not designing or coding, you can usually find me painting,
            camping, or exploring my city. I believe that the best ideas come
            from stepping outside of your comfort zone and trying new things,
            which is why I'm always looking for ways to expand my horizons and
            stay inspired.
          </p>
          <p>
            Thanks for taking the time to check out my portfolio. If you're
            interested in working together or have any questions, feel free to
            get in touch!
          </p>
          <button>
            <a href={Resume} target="_blank" rel="noreferrer">
              Resum&eacute;
            </a>
          </button>
        </div>
      </div>
    </section>
  );
}
export default AboutMe;
