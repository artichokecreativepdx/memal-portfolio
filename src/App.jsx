import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import Head from './components/head/head';
import Footer from './components/footer/footer';
import Routes from './routes';

export default function App() {
  return (
    <div className="container">
      <Router>
        <Head />
        <Routes />
        <Footer />
      </Router>
    </div>
  );
}
