import React from 'react';

import Nav from './Nav';
import SocialMedia from './SocialMedia';

const Header = () => {
  return (
    <header className="bg-blue-500 px-4">
      <div className="container mx-auto py-4 flex">
        <span className="mr-4">Logo</span>
        <Nav />
        <SocialMedia />
      </div>
    </header>
  );
};

export default Header;
