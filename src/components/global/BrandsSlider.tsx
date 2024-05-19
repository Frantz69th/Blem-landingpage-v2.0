// BrandsSlider.tsx
import { useState, useEffect } from 'react';

const BrandsSlider = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % 3); // Adjust the number of brands
    }, 3000); // Adjust the interval as needed

    return () => clearInterval(intervalId);
  }, []);

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % 3); // Adjust the number of brands
  };

  const handlePrev = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + 3) % 3); // Adjust the number of brands
  };

  return (
    <div className="relative">
      <div className="flex justify-between items-center px-4">
        <button onClick={handlePrev} className="hidden md:block text-gray-500 hover:text-gray-700">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7" />
          </svg>
        </button>
        <h2 className="text-xl font-semibold">Our Brands</h2>
        <button onClick={handleNext} className="hidden md:block text-gray-500 hover:text-gray-700">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
          </svg>
        </button>
      </div>
      <div className="overflow-x-hidden scrollbar-hide">
        <div className="flex p-4" style={{ transform: `translateX(-${currentIndex * 280}px)` }}>
          <div className="group w-40 h-40 bg-gray-200 rounded-lg flex items-center justify-center transition duration-300 transform hover:scale-110">
            <img src="brand1.png" alt="Brand 1" className="w-24 h-24 object-contain" />
          </div>
          <div className="group w-40 h-40 bg-gray-200 rounded-lg flex items-center justify-center transition duration-300 transform hover:scale-110">
            <img src="brand2.png" alt="Brand 2" className="w-24 h-24 object-contain" />
          </div>
          <div className="group w-40 h-40 bg-gray-200 rounded-lg flex items-center justify-center transition duration-300 transform hover:scale-110">
            <img src="brand3.png" alt="Brand 3" className="w-24 h-24 object-contain" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default BrandsSlider;
