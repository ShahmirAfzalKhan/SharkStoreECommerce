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

  // Automatic slide change every 3 seconds
  useEffect(() => {
    const intervalId = setInterval(nextSlide, 3000);
    return () => clearInterval(intervalId); // Clear interval on component unmount
  }, []);

  return (
    <div className="relative w-full h-64 md:h-80 lg:h-96 overflow-hidden">
      <h2 className="text-2xl font-bold text-center mt-4 mb-2">Popular Purchases</h2>
      <img
        src={images[currentImageIndex]}
        alt="Slideshow Image"
        className="w-full h-full object-contain"
      />
      <button
        onClick={prevSlide}
        className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-gray-800 bg-opacity-50 text-white p-2"
      >
        ⬅️
      </button>
      <button
        onClick={nextSlide}
        className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-gray-800 bg-opacity-50 text-white p-2"
      >
        ➡️
      </button>
    </div>
  );
};

export default Slideshow;