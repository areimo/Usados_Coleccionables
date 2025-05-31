import React from "react";
import psp from './psp.jpg';
import ps4 from './ps4.jpg';
import aciixbox360 from './aciixbox360.jpg';
import avcable from './avcable.jpg';
import ps2 from './ps2.jpg';
import ps2wpendrive from './ps2wpendrive.jpg';
import bacxbox360 from './bacxbox360.jpg';
import battlefield4ps3 from './battlefield4ps3.jpg';
import crysis2ps3 from './crysis2ps3.jpg';
import dell from './dell.jpg';
import f12011xbox360 from './f12011xbox360.jpg';
import fifa13xbox360 from './fifa13xbox360.jpg';
import fifa18ps3 from './fifa18ps3.jpg';
import fifa19ps4 from './fifa19ps4.jpg';
import kinnectsportsxbox360 from './kinnectsportsxbox360.jpg';
import ndsgames from './ndsgames.jpg';
import pes2018ps3 from './pes2018ps3.jpg';
import ps3fifacontroller from './ps3fifacontroller.jpg';
import skatexbox360 from './skatexbox360.jpg';
import tctd2ps4 from './tctd2ps4.jpg';
import tloups3 from './tloups3.jpg';
import uncharted2ps3 from './uncharted2ps3.jpg';
import xbox360 from './xbox360.jpg';
import xbox360controller from './xbox360controller.jpg';
import xbox360controllerwcable from './xbox360controllerwcable.jpg';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Navigation, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import './App.css';

const images = [psp, ps4, aciixbox360, avcable, ps2, ps2wpendrive, bacxbox360, battlefield4ps3, crysis2ps3, dell, f12011xbox360, fifa13xbox360, fifa18ps3, fifa19ps4, kinnectsportsxbox360, ndsgames, pes2018ps3, ps3fifacontroller, skatexbox360, tctd2ps4, tloups3, uncharted2ps3, xbox360, xbox360controller, xbox360controllerwcable];

const AutoSlider = () => {
  return (
    <div style={{ width: '100%', padding: '20px 0' }}>
      <Swiper
        modules={[Autoplay, Navigation, Pagination]}
        spaceBetween={10}
        slidesPerView={3}
        navigation
        pagination={{ clickable: true }}
        autoplay={{ delay: 3000, disableOnInteraction: false }}
        loop={true}
        breakpoints={{
          640: { slidesPerView: 1 },
          768: { slidesPerView: 2 },
          1024: { slidesPerView: 3 },
        }}
      >
        {images.map((img, index) => (
          <SwiperSlide key={index}>
            <img
              src={img}
              alt={`img-${index}`}
              style={{
                width: '18rem',
                height: '18rem',
                objectFit: 'cover',
                borderRadius: '5px',
              }}
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default AutoSlider;
export { AutoSlider as SecondSlider } 