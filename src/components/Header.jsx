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
      console.log(window.screenY);
      window.scrollY > 65 ? setActive(true) : setActive(false);
    };

    window.addEventListener('scroll', handleScroll);
  }, []);
  return (
    <header
      className={`  ${
        active ? 'lg:top-0 bg-white shadow-2xl' : 'lg:top-[60px]'
      } py-6 lg:py-4 fixed w-full transition-all duration-500 z-10`}>
      <div className='container mx-auto flex items-center justify-between'>
        <a href='' data-aos='fade-down' data-aos-delay='1000'>
          <img src={logo} alt='' />
        </a>
        <div
          data-aos='fade-down'
          data-aos-delay='1200'
          className='hidden lg:flex '>
          <Nav />
        </div>
        <button className='btn btn-sm btn-outline hidden lg:flex'>
          {btnText}{' '}
        </button>
        <button
          data-aos='fade-down'
          data-aos-delay='1400'
          className='lg:hidden'
          onClick={() => setShow(!show)}>
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
