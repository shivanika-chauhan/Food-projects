import React, { useState, useEffect } from "react";

const Slider = () => {
  const slides = ["/images/a.jpg", "/images/b.jpg", "/images/c.jpg"];
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  const goToSlide = (index) => setCurrent(index);

  return (
    <div className="relative w-full overflow-hidden m-0">

      {/* Slider Images */}
      <div
        className="flex transition-transform duration-700 ease-in-out"
        style={{ transform: `translateX(-${current * 100}%)` }}
      >
        {slides.map((img, index) => (
          <div key={index} className="w-full flex-none">
            <img
              src={img}
              alt=""
              className="w-full h-auto object-contain"
            />
          </div>
        ))}
      </div>

      {/* Dots Below Images */}
      <div className="absolute bottom-3 w-full flex justify-center space-x-2 z-10">
        {slides.map((_, index) => (
          <div
            key={index}
            onClick={() => goToSlide(index)}
            className={`w-3 h-3 rounded-full cursor-pointer transition-all ${
              current === index ? "bg-orange-500 transform scale-125" : "bg-white"
            }`}
          ></div>
        ))}
      </div>
    </div>
  );
};

export default Slider;
