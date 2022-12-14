import { useNav } from '../customHooks/useNav';
import IllustrationGallery from '../components/illustrationGallery/illustrationGallery';
const Illustration = () => {
  const illustrationRef = useNav('Illustration');

  return (
    <section ref={illustrationRef} id="illustrationContainer">
      <IllustrationGallery />
    </section>
  );
};

export default Illustration;
