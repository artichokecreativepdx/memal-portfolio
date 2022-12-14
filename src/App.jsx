import React from 'react';
import { Nav } from './nav';
import { Main } from './pages';
import Header from './components/head/header';
import Footer from './components/footer/footer';
import NavProvider from './context/NavContext';
export default function App() {
  return (
    <div className="container">
      <NavProvider>
        <Nav />
        <Header />
        <Main />
        <Footer />
      </NavProvider>
    </div>
  );
}
