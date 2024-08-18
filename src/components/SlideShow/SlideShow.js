import React, { useState, useEffect } from 'react';

const Slideshow = () => {
  const images = [
    'https://m.media-amazon.com/images/I/51wJCi6D6oL._SX679_.jpg',
    'https://m.media-amazon.com/images/I/61+K5f0TTrL._SX679_.jpg',
    'https://m.media-amazon.com/images/I/613rYIKkqyL._SX679_.jpg',
    'https://m.media-amazon.com/images/I/610eFK21CnL._SX679_.jpg',
    'https://m.media-amazon.com/images/I/61M3K-6tD6L._SX679_.jpg',
    'https://m.media-amazon.com/images/I/61g1cZOtCnL._AC_SX425_.jpg',
    'https://m.media-amazon.com/images/I/61EulvSBZmL._AC_SX425_.jpg',
    'https://m.media-amazon.com/images/I/617GTCMTyML._AC_SX522_.jpg',
    'https://m.media-amazon.com/images/I/61W+jvsnFqL._AC_SX522_.jpg',
    'https://m.media-amazon.com/images/I/61P4sIYEvQL._AC_SX522_.jpg',
  ];

  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const nextSlide = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const prevSlide = () => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  useEffect(() => {
    const intervalId = setInterval(nextSlide, 3000);
    return () => clearInterval(intervalId);
  }, []);

  return (
    <div className="relative w-full h-[300px] sm:h-[400px] md:h-[500px] lg:h-[600px] overflow-hidden">
      <h2 className="text-2xl font-bold text-center mt-4 mb-2 absolute top-0 left-0 w-full py-4  from-black via-transparent to-transparent text-black py-[50px]">
        Popular Purchases
      </h2>
      <img
        src={images[currentImageIndex]}
        alt="Slideshow Image"
        className="w-full h-full object-cover pt-[140px]"
      />
      <button
        onClick={prevSlide}
        className="absolute left-0 top-1/2 transform -translate-y-1/2 text-black p-2  rounded-full"
      >
        &#10094; 
      </button>
      <button
        onClick={nextSlide}
        className="absolute right-0 top-1/2 transform -translate-y-1/2 text-black p-2  rounded-full"
      >
        &#10095; 
      </button>
    </div>
  );
};

export default Slideshow;
