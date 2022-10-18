import { Route, Routes } from 'react-router-dom';
import Home from './pages/home';
import About from './pages/about';
import Web from './pages/web';
import Illustration from './pages/illustration';
// import Contact from './pages/contact';
// import Camp from './pages/camp';
function RoutePath() {
  return (
    <Routes>
      <Route exact path="/" element={<Home />} />
      <Route path="about" element={<About />} />
      <Route path="web" element={<Web />} />
      <Route path="illustration" element={<Illustration />} />
      {/* <Route path="CampApp" element={<Camp />} /> */}
      {/* <Route path="/contact" element={<Contact />} /> */}
    </Routes>
  );
}
export default RoutePath;
