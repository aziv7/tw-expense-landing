import React, { useEffect, useState } from 'react';
import { header } from '../data';
import Nav from './Nav';

import { HiOutlineX, HiMenuAlt4 } from 'react-icons/hi';
import MobileNav from './MobileNav';

const Header = () => {
  const [show, setShow] = useState(false);
  const [active, setActive] = useState(false);
  const { logo, btnText } = header;

  useEffect(() => {
    const handleScroll = () => {
      window.screenY > 60 ? setActive(true) : setActive(false);
    };

    const event = window.addEventListener('scroll', handleScroll);

    return () => {
      if (event) event.removeEventListener('scroll', handleScroll);
    };
  }, []);
  return (
    <header
      className={`  ${
        active ? 'lg:top-0 bg-white shadow-2xl' : 'lg:top-[60px]'
      } py-6 lg:py-4 fixed w-full transition-all z-10`}>
      <div className='container mx-auto flex items-center justify-between'>
        <a href=''>
          <img src={logo} alt='' />
        </a>
        <div className='hidden lg:flex '>
          <Nav />
        </div>
        <button className='btn btn-sm btn-outline hidden lg:flex'>
          {btnText}{' '}
        </button>
        <button className='lg:hidden' onClick={() => setShow(!show)}>
          {show ? (
            <HiOutlineX className='text-3xl text-accent' />
          ) : (
            <HiMenuAlt4 className='text-3xl text-accent' />
          )}
        </button>
        <div
          className={`${
            show ? 'left-0' : '-left-full'
          } fixed top-0 bottom-0  w-[60vw]  `}>
          <MobileNav />
        </div>
      </div>
    </header>
  );
};

export default Header;
