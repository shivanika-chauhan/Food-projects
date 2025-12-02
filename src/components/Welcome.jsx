import React, { useState, useEffect } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

const Welcome = () => {
  const images = Array.from({ length: 35 }, (_, i) => `/images/${i + 1}.jpg`);

  const [index, setIndex] = useState(0);
  const [slidesToShow, setSlidesToShow] = useState(5);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 640) setSlidesToShow(1); // mobile
      else if (window.innerWidth < 768) setSlidesToShow(2); // small tablet
      else if (window.innerWidth < 1024) setSlidesToShow(3); // large tablet
      else setSlidesToShow(5); // desktop
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      handleNext();
    }, 3000);
    return () => clearInterval(interval);
  }, [index, slidesToShow]);

  const handleNext = () => {
    setIndex((prev) => (prev + 1) % images.length);
  };

  const handlePrev = () => {
    setIndex((prev) => (prev - 1 + images.length) % images.length);
  };

  return (
    <div className="w-full relative py-8 bg-gray-100 overflow-hidden">
      <h1 className="text-center text-2xl font-bold mb-6">
        Our Customer's Favourite
      </h1>

      {/* Left Arrow */}
      <button
        onClick={handlePrev}
        className="absolute left-2 top-1/2 transform -translate-y-1/2 z-10 bg-white p-2 rounded-full shadow"
      >
        <FaChevronLeft size={22} />
      </button>

      {/* Right Arrow */}
      <button
        onClick={handleNext}
        className="absolute right-2 top-1/2 transform -translate-y-1/2 z-10 bg-white p-2 rounded-full shadow"
      >
        <FaChevronRight size={22} />
      </button>

      {/* Slider */}
      <div
        className="flex transition-transform duration-700"
        style={{ transform: `translateX(-${(index * 100) / slidesToShow}%)` }}
      >
        {images.map((img, i) => (
          <div
            key={i}
            className="px-2"
            style={{ width: `${100 / slidesToShow}%`, flexShrink: 0 }}
          >
            <div className="w-full relative pb-[75%] overflow-hidden rounded-lg bg-white">
              <img
                src={img}
                alt={`Slide ${i + 1}`}
                className="absolute top-0 left-0 w-full h-full object-cover"
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Welcome;
