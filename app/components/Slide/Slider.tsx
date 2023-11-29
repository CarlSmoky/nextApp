"use client";
import React, { useState, useEffect, useRef } from "react";
import Image from "next/image";
import { GrFormPrevious, GrFormNext } from "react-icons/gr";
import { RxDotFilled } from "react-icons/rx";
import { featuredImages } from "./Images";
import {blurData} from "../Gallery/BlurData"

let count: number = 0;
let slideInterval: undefined | ReturnType<typeof setTimeout>

const Slider: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const slideRef = useRef(document.createElement("div"))

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

  const startSlider = () => {
    slideInterval = setInterval(() => {
      handleOnNextClick();
    }, 3000);
  };

  const pauseSlider = () => {
    clearInterval(slideInterval);
  };

  const goToSlide = (slideIndex: number) => {
    setCurrentIndex(slideIndex);
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

  return (
    <section ref={slideRef} className="margin-global max-w-screen-2xl m-auto">
      <div className="w-full relative select-none">
        <div className="aspect-video" >
          <Image
            src={featuredImages[currentIndex]}
            alt={`image_${currentIndex + 1}`}
            width={0}
            height={0}
            fill={true}
            sizes="100vw"
            priority={true}
            style={{width: "100%", objectFit:"contain"}}
            placeholder="blur"
            blurDataURL={blurData}
          />
        </div>
        <div className="absolute w-full top-1/2 transform -translate-y-1/2 flex justify-between items-start px-3 text-white-100">
          <button onClick={handleOnPrevClick}>
            <GrFormPrevious size={25} />
            <span className="sr-only">previous</span>
          </button>
          <button onClick={handleOnNextClick} >
            <GrFormNext size={25} />
            <span className="sr-only">next</span>
          </button>
        </div>
        <div className="flex top-4 justify-center py-2">
          {featuredImages.map((slide, slideIndex) => (
            <div
              key={slideIndex}
              onClick={() => goToSlide(slideIndex)}
              className="z-10 text-2xl cursor-pointer"
            >
              <RxDotFilled />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Slider;
