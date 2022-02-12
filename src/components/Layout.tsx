import React from 'react';

import Footer from './Footer';
import Header from './Header';

const Layout: React.FC = ({ children }) => {
  return (
    <>
      <Header />
      <main className="container mx-auto">{children}</main>
      <Footer />
    </>
  );
};

export default Layout;
