import React, { useState } from 'react';

import Arrow from '../assets/img/product/cards/arrow.svg';
import { product } from '../data';
const Cards = () => {
  const [index, setIndex] = useState(1);

  return (
    <>
      <div className='flex flex-col gap-y-[30px] lg:flex-row lg:gap-x-[30px]'>
        {product?.cards.map((card, i) => (
          <div
            data-aos='zoom-out'
            data-aos-offset='300'
            data-aos-delay='delay'
            className={`${
              i === index && 'bg-white shadow-2xl'
            } w-[350px] h-[350px] bg-ping-200 flex flex-col 
          justify-center items-center mx-auto p-[65px] text-center rounded-[12px] cursor-pointer transition-all
          `}
            onClick={() => setIndex(i)}
            key={i}>
            <div className='mb-6'>
              <img src={card?.icon} alt='' />
            </div>
            <div className='mb-3 text-[30px] font-medium'> {card.title} </div>
            <p className='mb-6 text-light '> {card.subtitle} </p>
            {index === i && <img src={Arrow} />}
          </div>
        ))}
      </div>
    </>
  );
};

export default Cards;
