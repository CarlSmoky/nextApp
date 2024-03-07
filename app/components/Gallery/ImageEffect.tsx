"use client";
import React, { MouseEvent, useState } from "react";
import Image from "next/image";

type ImageEffectProps = {
  src: string;
  alt: string;
  i: number;
};

const MAGNIFIER_SIZE = {
  width: 350,
  height: 450,
}
const ZOOM_LEVEL = 2;

const ImageEffect: React.FC<ImageEffectProps> = ({ src, alt, i }) => {
  const [zoomable, setZoomable] = useState(false);
  const [imageSize, setImageSize] = useState({ width: 0, height: 0 });
  const [position, setPosition] = useState({
    x: 100,
    y: 100,
    mouseX: 0,
    mouseY: 0,
  });
  const url = src.replace(/\(/g, '%28').replace(/\)/g, '%29');

  const handleMouseEnter = (e: MouseEvent) => {
    let element = e.currentTarget;
    let { width, height } = element.getBoundingClientRect();
    setImageSize({ width, height });
    setZoomable(true);
    updatePosition(e);
  };

  const handleMouseLeave = (e: MouseEvent) => {
    setZoomable(false);
    updatePosition(e);
  };

  const handleMouseMove = (e: MouseEvent) => {
    updatePosition(e);
  };

  const updatePosition = (e: MouseEvent) => {
    const { left, top } = e.currentTarget.getBoundingClientRect();
    let x = e.clientX - left;
    let y = e.clientY - top;
    setPosition({
      x: -x * ZOOM_LEVEL + MAGNIFIER_SIZE.width / 2,
      y: -y * ZOOM_LEVEL + MAGNIFIER_SIZE.height / 2,
      mouseX: x - MAGNIFIER_SIZE.width / 2,
      mouseY: y - MAGNIFIER_SIZE.height / 2,
    });
  };

  return (
    <div className="w-full md:w-1/2 bg-white-200/40 aspect-square relative">
      <div
        onMouseLeave={handleMouseLeave}
        onMouseEnter={handleMouseEnter}
        onMouseMove={handleMouseMove}
        className="w-[97%] h-[97%] m-auto overflow-hidden"
      >
        <div className="w-[93%] h-[93%] absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
          <Image
            alt={alt}
            src={src}
            fill
            sizes="(max-width: 768px) 100vw, 50vw"
            className="object-contain  border z-10"
            priority={i === 0 ? true : false}
          />
          <div
            style={{
              backgroundPosition: `${position.x}px ${position.y}px`,
              backgroundImage: `url(${url})`,
              backgroundSize: `${imageSize.width * ZOOM_LEVEL}px ${
                imageSize.height * ZOOM_LEVEL
              }px`,
              backgroundRepeat: "no-repeat",
              display: zoomable ? "block" : "none",
              top: `${position.mouseY}px`,
              left: `${position.mouseX}px`,
              width: `${MAGNIFIER_SIZE.width}px`,
              height: `${MAGNIFIER_SIZE.height}px`,
            }}
            className={`z-50 pointer-events-none absolute`}
          />
        </div>
      </div>
    </div>
  );
};

export default ImageEffect;
