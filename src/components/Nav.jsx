import React from 'react';
import { nav } from '../data';

const Nav = () => {
  return (
    <nav>
      <ul className='flex items-center gap-x-10'>
        {nav.map((item, i) => (
          <li key={i}>
            <a className='hover:text-accent transition' href={item?.href}>
              {item?.name}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Nav;
