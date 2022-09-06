import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import Head from './components/head/head';
import Footer from './components/footer/footer';
import RoutePath from './routes';

export default function App() {
  return (
    <div className="container">
      <Router>
        <Head />
        <RoutePath />
        <Footer />
      </Router>
    </div>
  );
}
