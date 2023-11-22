"use client";
import React, { useState, useEffect, useRef } from "react";
import Image from "next/image";

let count = 0;
let slideInterval;
const Slider = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const slideRef = useRef<HTMLInputElement>(null);

  const featuredImages = [
    "/images/performance.jpg",
    "/images/revealing_shadows.jpg",
    "/images/dance.jpg",
  ];

  const removeAnimation = () => {
    slideRef.current.classList.remove("fade-anim");
  };

  const handleOnNextClick = () => {
    count = (count + 1) % featuredImages.length;
    setCurrentIndex(count);
    slideRef.current.classList.add("fade-anim");
  };

  const handleOnPrevClick = () => {
    const productsLength = featuredImages.length;
    count = (currentIndex + productsLength - 1) % productsLength;
    setCurrentIndex(count);
    slideRef.current.classList.add("fade-anim");
  };

  const pauseSlider = () => {
    clearInterval(slideInterval);
  };

  useEffect(() => {
    startSlider();
    slideRef.current.addEventListener("animationend", removeAnimation);
    slideRef.current.addEventListener("mouseenter", pauseSlider);
    slideRef.current.addEventListener("mouseleave", startSlider);

    return () => {
      clearInterval(slideInterval);
    };
  }, []);

  const startSlider = () => {
    slideInterval = setInterval(() => {
      handleOnNextClick();
    }, 3000);
  };

  console.log(slideRef);

  return (
    <div ref={slideRef} className="margin-global max-w-screen-2xl m-auto">
      <div className="w-full relative select-none">
        <div className="aspect-video">
          <Image
            src={featuredImages[currentIndex]}
            alt=""
            width={0}
            height={0}
            sizes="100vw"
            style={{ width: "100%", height: "auto" }}
          />
        </div>
        <div className="absolute w-full top-1/2 transform -translate-y-1/2 flex justify-between items-start px-3">
          <button onClick={handleOnPrevClick}>Previous</button>
          <button onClick={handleOnNextClick}>Next</button>
        </div>
      </div>
    </div>
  );
};

export default Slider;
