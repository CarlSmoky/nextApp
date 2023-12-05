"use client";
import React, { useState } from "react";
import Image from "next/image";
import { GrFormPrevious, GrFormNext } from "react-icons/gr";
import { RxDotFilled } from "react-icons/rx";
import { featuredImages } from "./Images";
import {blurData} from "../Gallery/BlurData"

let count: number = 0;
let slideInterval: undefined | ReturnType<typeof setTimeout>

const Slider: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleOnNextClick = () => {
    count = (count + 1) % featuredImages.length;
    setCurrentIndex(count);
  };

  const handleOnPrevClick = () => {
    const productsLength = featuredImages.length;
    count = (currentIndex + productsLength - 1) % productsLength;
    setCurrentIndex(count);
  };

  const pauseSlider = () => {
    clearInterval(slideInterval);
  };

  const goToSlide = (slideIndex: number) => {
    setCurrentIndex(slideIndex);
  };

  return (
    <section className="md:margin-global max-w-screen-2xl m-auto ">
      <div className="md:p-4 lg:p-6 xl:p-10">
        <div className="w-full aspect-video relative select-none" >
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
        <div className="absolute w-full top-1/2 transform -translate-y-1/2 flex justify-between items-start text-white-100">
          <button onClick={handleOnPrevClick}>
            <GrFormPrevious size={25} />
            <span className="sr-only">previous</span>
          </button>
          <button onClick={handleOnNextClick} >
            <GrFormNext size={25} />
            <span className="sr-only">next</span>
          </button>
        </div>
        </div>
        <div className="flex top-4 justify-center py-2">
          {featuredImages.map((slide, slideIndex) => (
            <div
              key={slideIndex}
              onClick={() => goToSlide(slideIndex)}
              className="z-10 text-2xl cursor-pointer"
            >
              <RxDotFilled className={`${currentIndex === slideIndex ? "text-black-100" : "text-grey-100/50"}`}/>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Slider;
