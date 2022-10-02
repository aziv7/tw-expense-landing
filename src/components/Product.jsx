import React from 'react';
import { product } from '../data';
import Cards from './Cards';

const Product = () => {
  return (
    <section className='section'>
      <div className='container mx-auto'>
        <div className='flex flex-col items-center lg:flex-row mb-10 lg:mb-20'>
          <h2
            className='section-title'
            data-aos='fade-up'
            data-aos-offset='400'
            data-aos-delay='300'>
            {product?.title}
          </h2>
          <p
            data-aos='fade-up'
            data-aos-offset='400'
            data-aos-delay='300'
            className='lead lg:max-w-[350px]'>
            {product?.subtitle}{' '}
          </p>
        </div>
      </div>{' '}
      <Cards />
    </section>
  );
};

export default Product;
