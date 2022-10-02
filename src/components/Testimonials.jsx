import React from 'react';
import { testimonials } from '../data';
import ClientSlider from './ClientSlider';

const Testimonials = () => {
  return (
    <section className=' section'>
      <div className='container mx-auto'>
        <h2
          data-aos='fade-up'
          data-aos-delay='200'
          className=' title mb-10 lg:mb-20 text-center max-w-[920px] mx-auto '>
          {testimonials?.title}
        </h2>
        <div data-aos='fade-up' data-aos-delay='400'>
          <ClientSlider clients={testimonials?.clients} />
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
