import React from 'react';
import { overview } from '../data';

const Brands = () => {
  const { brands } = overview;
  return (
    <section className='py-9 '>
      <div className=' container mx-auto flex flex-col lg:flex-row items-center justify-between space-y-6'>
        {brands.map((brand, i) => (
          <div data-aos='fade-up' data-aos-delay={brand?.delay} key={i}>
            <img src={brand?.image} />
          </div>
        ))}
      </div>
    </section>
  );
};

export default Brands;
