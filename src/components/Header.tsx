import Link from 'next/link';
import React from 'react';

import Nav from './Nav';
import SocialMedia from './SocialMedia';

const Header = () => {
  return (
    <header className="bg-blue-500 px-4">
      <div className="container mx-auto py-4 flex">
        <span className="mr-6">
          <Link href={'/'}>
            <a>Logo</a>
          </Link>
        </span>
        <Nav />
        <SocialMedia />
      </div>
    </header>
  );
};

export default Header;
