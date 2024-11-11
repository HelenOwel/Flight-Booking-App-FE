import React, { useState, useEffect } from 'react';
import { FaAngleLeft, FaAngleRight } from 'react-icons/fa';
import mainBanner from '../assets/images/main-banner.png';
import banner2 from '../assets/images/Banner2.png';
import banner3 from '../assets/images/2.png';

const images = [
  { id: 1, image: mainBanner },
  { id: 2, image: banner2 },
  { id: 3, image: banner3 },
];

function Hero() {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const nextImage = () => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    );
  };

  const previousImage = () => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  useEffect(() => {
    const interval = setInterval(nextImage, 3000); 
    return () => clearInterval(interval); 
  }, []);

  return (
    <div className="w-screen h-screen overflow-hidden relative">
      <div className="absolute w-full flex justify-between bottom-[50%] items-center text-white px-4 z-10">
        <div onClick={previousImage} className="bg-slate-900 p-2 rounded-full cursor-pointer">
          <FaAngleLeft size={40} />
        </div>
        <div onClick={nextImage} className="bg-slate-900 p-2 rounded-full cursor-pointer">
          <FaAngleRight size={40} />
        </div>
      </div>

      {/* Image Carousel */}
      <div
        className="flex w-full h-full transition-transform duration-500"
        style={{
          transform: `translateX(-${currentImageIndex * 100}%)`,
        }}
      >
        {images.map((image) => (
          <div key={image.id} className="flex-shrink-0 w-screen h-full">
            <img
              src={image.image}
              alt={`Banner ${image.id}`}
              className="w-full h-full object-cover"
            />
          </div>
        ))}
      </div>
    </div>
  );
}

export default Hero;
