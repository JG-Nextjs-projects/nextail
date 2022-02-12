import React from 'react';

const Footer = () => {
  const date = new Date();
  let year = date.getFullYear();

  return (
    <footer>
      <p>Copyright &copy; {year}</p>
    </footer>
  );
};

export default Footer;
