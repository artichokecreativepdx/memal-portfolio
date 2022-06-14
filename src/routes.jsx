import { Route, Switch, Redirect } from 'react-router-dom';
import Home from './pages/home';
import About from './pages/about';

import Illustration from './pages/illustration';
import Footer from './components/footer/footer';
import Header from './components/head/head';

export const Routes = () => {
  return (
    <div>
      <Header />
      <Switch>
        <Route exact path="/Home" component={Home} />
        <Route exact path="/">
          <Redirect to="/Home" />
        </Route>
        <Route path="/about" component={About} exact={true} />
        <Route path="/illustration" component={Illustration} exact={true} />
      </Switch>
      <Footer />
    </div>
  );
};
