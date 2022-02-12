import React from 'react';

import Nav from './Nav';
import SocialMedia from './SocialMedia';

const Header = () => {
  return (
    <header>
      <div>
        <span>Logo</span>
        <Nav />
        <SocialMedia />
      </div>
    </header>
  );
};

export default Header;
