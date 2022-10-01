import React from 'react';
import { nav } from '../data';

const MobileNav = () => {
  return (
    <div className='bg-accent/90 w-full h-full'>
      <ul className='h-full flex flex-col justify-center items-center gap-y-8'>
        {nav.map((item, i) => (
          <li key={i}>
            <a
              className='link text-white text-xl transition hover:underline'
              href={item?.href}>
              {item?.name}{' '}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default MobileNav;
