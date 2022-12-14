import { useNav } from '../customHooks/useNav';
import AboutMe from '../components/about/aboutMe';
const About = () => {
  const aboutRef = useNav('About');

  return (
    <section ref={aboutRef} id="aboutContainer">
      <AboutMe />
    </section>
  );
};

export default About;
