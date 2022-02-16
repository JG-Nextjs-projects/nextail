import Link from 'next/link';
import React from 'react';

const Nav = () => {
  return (
    <nav className="mr-auto">
      <ul className="flex">
        <li className="mr-3">
          <Link href={'/blog'}>
            <a>Blog</a>
          </Link>
        </li>
        <li>
          <Link href={'/projects'}>
            <a>Projects</a>
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Nav;
