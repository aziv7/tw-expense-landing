import React from 'react';
import { features } from '../data';

const Feature3 = () => {
  const { feature3: feature } = features;
  return (
    <section className='bg-pink-50 section'>
      <div className='container mx-auto '>
        <div className='flex flex-col lg:flex-row lg:items-center lg:gap-x-[30px]'>
          <div className='flex-1 ' data-aos='fade-right' data-aos-offset='400'>
            <div className='pretitle'>{feature?.pretitle}</div>
            <h2 className='title'>{feature?.title} </h2>
            <p className='lead'> {feature?.subtitle} </p>
            <button className=' btn-link flex items-center gap-x-3 hover:gap-x-5 transition-all'>
              {' '}
              {feature?.btnLink} <img src={feature?.btnIcon} alt='' />{' '}
            </button>
          </div>
          <div className='flex-1 ' data-aos='fade-left' data-aos-offset='300'>
            <img src={feature?.image} alt='' />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Feature3;
