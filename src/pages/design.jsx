import { useNav } from '../customHooks/useNav';
import DesignProjects from '../components/design/designProjects';
const Design = () => {
  const designRef = useNav('Design');

  return (
    <section ref={designRef} id="designContainer">
      <DesignProjects />
    </section>
  );
};

export default Design;
