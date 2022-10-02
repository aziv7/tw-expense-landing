import React, { useState } from 'react';
import { pricing } from '../data';
import { AiOutlineArrowRight } from 'react-icons/ai';
const Pricing = () => {
  const [index, setIndex] = useState(1);
  return (
    <section className=' section'>
      <div className='container mx-auto'>
        <h2
          data-aos='fade-up'
          data-aos-delay='200'
          className='h2 mb-10 lg:mb-20 text-center'>
          {pricing?.title}
        </h2>
      </div>
      <div className='flex flex-col lg:flex-row lg:gap-x-[30px] gap-y-[30px] lg:gap-y-0 justify-center items-center'>
        {pricing?.cards.map((card, indx) => (
          <div
            data-aos='fade-up'
            data-aos-offset='300'
            data-aos-delay={card?.delay}
            onClick={() => setIndex(indx)}
            key={indx}>
            <div
              className={`${
                index === indx ? 'bg-white shadow-2xl' : 'border border-grey'
              } w-[350px] cursor-pointer transition-all p-[40px] rounded-[12px] h-[500px] `}>
              <div className='mb-8'>
                <img src={card?.icon} alt='' />
              </div>
              <div className='text-[32px] font-semibold mb-8'>
                {card?.title}
              </div>

              <div className='flex flex-col gap-y-2 mb-6 '>
                {card?.services.map((service, ind) => (
                  <div key={ind} className='flex items-center gap-x-[10px]'>
                    {service?.name}
                  </div>
                ))}
              </div>
              <div className='mb-10'>
                <div className=''>
                  <span className='text-2xl font-semibold'>
                    {' '}
                    {card?.price}{' '}
                  </span>
                  <span className='text-xl text-light font-light'>year</span>{' '}
                </div>
                <div className='text-base text-light'>{card?.userAmount}</div>
              </div>
              <button
                className={`${
                  indx === index
                    ? 'bg-accent text-white hover:bg-accentHover'
                    : 'border bg-white border-accent text-accent'
                } btn btn-sm   space-x-[14px] hover:space-x-[18px] transition-all`}>
                <span>{card?.btnText}</span>
                <AiOutlineArrowRight />
              </button>
            </div>{' '}
          </div>
        ))}
      </div>
    </section>
  );
};

export default Pricing;
