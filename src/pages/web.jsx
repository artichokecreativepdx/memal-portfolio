import { useNav } from '../customHooks/useNav';
import WebProjects from '../components/webProjects/webProjects';
const Web = () => {
  const webRef = useNav('Web');

  return (
    <section ref={webRef} id="webContainer">
      <WebProjects />
    </section>
  );
};

export default Web;
