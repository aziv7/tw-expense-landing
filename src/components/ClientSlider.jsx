import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
const ClientSlider = ({ clients }) => {
  return (
    <Swiper
      slidesPerView={1}
      spaceBetween={30}
      grabCursor={true}
      loop={true}
      breakpoints={{
        640: { slidesPerView: 1, spaceBetween: 10 },
        768: { slidesPerView: 2, spaceBetween: 30 },
        1024: { slidesPerView: 3, spaceBetween: 0 },
        1170: { slidesPerView: 3, spaceBetween: 30 },
      }}>
      {clients.map((c, i) => (
        <SwiperSlide
          key={i}
          style={{ borderColor: c.borderColor }}
          className='border-t-[10px] rounded-t-[12px]'>
          <div className='w-full mx-auto h-[250px] rounded-[12px] py-6 px-[30px] border border-grey lg:max-w-[300px] xl:max-w-[350px] '>
            <div className='mb-[30px]'> {c?.message} </div>
            <div className='flex gap-x-[10px]'>
              <img src={c?.image} />
              <div className='font-bold'>{c?.name} </div>
              <div className='text-light'>{c?.position} </div>
            </div>
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default ClientSlider;
