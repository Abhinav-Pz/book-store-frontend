import React from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import { FaLongArrowAltLeft, FaLongArrowAltRight } from "react-icons/fa";

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/effect-cards';

import './BannerCard.css';

// import required modules
import { EffectCards } from 'swiper/modules';

const BannerCard = () => {
  return (
    <div style={{marginRight:"230px"}}>
         <Swiper
        effect={'cards'}
        grabCursor={true}
        modules={[EffectCards]}
        className="mySwiper "
      >
        <SwiperSlide></SwiperSlide>
        <SwiperSlide></SwiperSlide>
        <SwiperSlide></SwiperSlide>
        <SwiperSlide></SwiperSlide>
        <SwiperSlide></SwiperSlide>
        <SwiperSlide></SwiperSlide>
      </Swiper>
      <div className='flex justify-center'>
        <p className='flex mt-3 font-serif  p-1 gap-3'><FaLongArrowAltLeft className='h-6' />Swipe<FaLongArrowAltRight className='h-6' /></p>
      </div>
    </div>
    
  )
}

export default BannerCard