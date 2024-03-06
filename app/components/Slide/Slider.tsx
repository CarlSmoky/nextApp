"use client";
import React, { useState, useEffect } from "react";
import Arrow from "./Arrow";
import { featuredImages } from "./Images";
import Indicator from "./Indicator";

const Slider: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const autoplay = setInterval(() => {
      nextSlide();
    }, 3000);
    return () => clearInterval(autoplay);
  }, [currentIndex]);

  const prevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? featuredImages.length - 1 : prevIndex - 1
    );
  };
  const nextSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === featuredImages.length - 1 ? 0 : prevIndex + 1
    );
  };

  const jumpSlide = (slideIndex: number) => {
    setCurrentIndex(slideIndex);
  };
  return (
    <section className="md:margin-global max-w-screen-2xl m-auto md:p-4 lg:p-6 xl:p-10">
      <div className="relative w-full aspect-video select-none ">
        <div
          style={{ backgroundImage: `url(${featuredImages[currentIndex]})` }}
          className="w-full h-full bg-center bg-contain bg-no-repeat ease-in-out duration-700"
        ></div>
        <Arrow direction="left" onClick={prevSlide} />
        <Arrow direction="right" onClick={nextSlide} />
      </div>
      <ul className="flex top-4 justify-center py-2 z-10">
        {featuredImages.map((slide, index) => (
          <Indicator
            key={index}
            jumpSlide={jumpSlide}
            index={index}
            currentIndex={currentIndex}
          />
        ))}
      </ul>
    </section>
  );
};

export default Slider;
