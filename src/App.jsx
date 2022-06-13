import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from 'react-router-dom';

import { Grid, Container } from 'semantic-ui-react';
import Home from './pages/home';
import About from './pages/about';

import Illustration from './pages/illustration';
import Footer from './components/footer/footer';
import Header from './components/head/head';

export default function App() {
  return (
    <Router>
      <Container fluid>
        <Grid>
          <Header />
          <Grid.Column stretched tablet={10} computer={12} mobile={16}>
            <Switch>
              <Route path="/home" component={Home} exact={true} />
              <Route path="/about" component={About} exact={true} />
              <Route
                path="/illustration"
                component={Illustration}
                exact={true}
              />
              <Route exact path="/" render={() => <Redirect to="/home" />} />
            </Switch>
            <Footer />
          </Grid.Column>
        </Grid>
      </Container>
    </Router>
  );
}
