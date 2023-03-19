import React from 'react';

import NavLink from './NavLink';
import { navLinks } from './navLinks';
import './Nav.css';

const Nav = () => {
  return (
    <nav>
      <div className="mobile">
        {navLinks.map(({ navLinkId, scrollToId }, idx) => (
          <NavLink key={idx} navLinkId={navLinkId} scrollToId={scrollToId} />
        ))}
      </div>
      <div className="desktop">
        {navLinks.map(({ navLinkId, scrollToId }, idx) => (
          <NavLink key={idx} navLinkId={navLinkId} scrollToId={scrollToId} />
        ))}
      </div>
    </nav>
  );
};

export default Nav;
