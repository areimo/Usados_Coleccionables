import { useEffect, useRef, useState } from 'react';import React from "react";
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


const images = [  psp, ps4, aciixbox360, avcable, ps2, ps2wpendrive, bacxbox360,battlefield4ps3, crysis2ps3, dell, f12011xbox360, fifa13xbox360,fifa18ps3, fifa19ps4, kinnectsportsxbox360, ndsgames, pes2018ps3,ps3fifacontroller, skatexbox360, tctd2ps4, tloups3, uncharted2ps3,xbox360, xbox360controller, xbox360controllerwcable];

const AutoSlider = () => {
  const [current, setCurrent] = useState(0);
  const timeoutRef = useRef(null);

  const delay = 3000;

  useEffect(() => {
    const next = (current + 1) % images.length;
    timeoutRef.current = setTimeout(() => setCurrent(next), delay);
    return () => clearTimeout(timeoutRef.current);
  }, [current]);

  return (
    <div className="slider-container">
      <div
        className="slider-track"
        style={{ transform: `translateX(-${current * 100}%)` }}
      >
        {images.map((img, index) => (
          <div className="slide" key={index}>
            <img src={img} alt={`img-${index}`} />
          </div>
        ))}
      </div>
      <div className="dots">
        {images.map((_, idx) => (
          <span
            key={idx}
            className={idx === current ? 'dot active' : 'dot'}
            onClick={() => setCurrent(idx)}
          />
        ))}
      </div>
    </div>
  );
};

export default AutoSlider;
export { AutoSlider as SecondSlider }; 