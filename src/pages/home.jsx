import { useNav } from '../customHooks/useNav';

import Guts from '../components/guts/guts';
const Home = () => {
  const homeRef = useNav('Home');

  return (
    <section ref={homeRef} id="homeContainer">
      <Guts />
    </section>
  );
};

export default Home;
