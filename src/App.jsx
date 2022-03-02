import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from 'react-router-dom';
import { Container } from 'semantic-ui-react';
import Home from './pages/home';
import Web from './pages/web';
import Design from './pages/design';
import Illustration from './pages/illustration';
import Footer from './components/footer';
import Header from './components/head';

export default function App() {
  return (
    <Router>
      <Container>
        <Header />
        <Switch>
          <Route path="/home" component={Home} exact={true} />
          <Route path="/web" component={Web} exact={true} />
          <Route path="/design" component={Design} exact={true} />
          <Route path="/illustration" component={Illustration} exact={true} />
          <Route exact path="/" render={() => <Redirect to="/home" />} />
        </Switch>
        <Footer />
      </Container>
    </Router>
  );
}
