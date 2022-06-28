import { Route, Switch } from 'react-router-dom';
import Home from './pages/home';
import About from './pages/about';
import Web from './pages/web';
import Illustration from './pages/illustration';

function Routes() {
  return (
    <Switch>
      <Route path="/" component={Home} exact />
      <Route path="/about" component={About} />
      <Route path="/web" component={Web} />
      <Route path="/illustration" component={Illustration} />
    </Switch>
  );
}
export default Routes;
