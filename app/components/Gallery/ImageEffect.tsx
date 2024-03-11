"use client";
import React, { MouseEvent, useState, useEffect, useCallback } from "react";
import Image from "next/image";
import useResizeObserver from "../../hooks/useResizeObserver";

type ImageEffectProps = {
  src: string;
  alt: string;
  blurDataURL: string | undefined;
  i: number;
};

const DEFAULT_IMAGE_SIZE = {
  width: 300,
  height: 300,
};

const MAGNIFIER_SIZE = {
  width: 350,
  height: 450,
};
const ZOOM_LEVEL = 2.5;

const ImageEffect: React.FC<ImageEffectProps> = ({ src, alt, blurDataURL }) => {
  const [innerImageContainerSize, setInnerImageContainerSize] =
    useState(DEFAULT_IMAGE_SIZE);
  const [downloadImageSize, setDownloadImageSize] =
    useState(DEFAULT_IMAGE_SIZE);
  const [displayImageSize, setDisplayImageSize] = useState(DEFAULT_IMAGE_SIZE);
  const [zoomable, setZoomable] = useState(false);
  const [imageSize, setImageSize] = useState({ width: 0, height: 0 });
  const [isLoaded, setIsLoaded] = useState(false);
  const [position, setPosition] = useState({
    x: 100,
    y: 100,
    mouseX: 0,
    mouseY: 0,
  });

  const url = src.replace(/\(/g, "%28").replace(/\)/g, "%29");

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

  const onResize = useCallback((target: HTMLDivElement) => {
    const { width, height } = target.getBoundingClientRect();
    setInnerImageContainerSize({ width, height });
  }, []);

  const innerImageContainer = useResizeObserver(onResize);

  const getRatio = useCallback(
    (
      innerImageContainerSizeWidth: number,
      downloadImageSizeWidth: number,
      downloadImageSizeHeight: number
    ): number => {
      return downloadImageSize.width >= downloadImageSize.height
        ? innerImageContainerSizeWidth / downloadImageSizeWidth
        : innerImageContainerSizeWidth / downloadImageSizeHeight;
    },
    [downloadImageSize]
  );

  const makeImageSize = (
    ratio: number,
    downloadImageSizeWidth: number,
    downloadImageSizeHeight: number
  ) => {
    return {
      width: downloadImageSizeWidth * ratio,
      height: downloadImageSizeHeight * ratio,
    };
  };

  useEffect(() => {
    const ratio = getRatio(
      innerImageContainerSize.width,
      downloadImageSize.width,
      downloadImageSize.height
    );
    const displayImageSize = makeImageSize(
      ratio,
      downloadImageSize.width,
      downloadImageSize.height
    );
    setDisplayImageSize(displayImageSize);
    setIsLoaded(true);
  }, [downloadImageSize, innerImageContainerSize, getRatio]);

  return (
    <div className="flex items-center justify-center w-full md:w-1/2 bg-white-200/40 aspect-square cursor-zoom-in">
      <div
        ref={innerImageContainer}
        className="flex items-center justify-center w-[95%] h-[95%]"
      >
        <div
          onMouseLeave={handleMouseLeave}
          onMouseEnter={handleMouseEnter}
          onMouseMove={handleMouseMove}
          className={`relative`}
          style={displayImageSize}
        >
          <Image
            alt={alt}
            src={src}
            fill
            sizes="(max-width: 768px) 75vw, 40vw"
            className={`object-contain  border z-10  ${
              !isLoaded && "blur-2xl"
            } liner duration-500`}
            placeholder="blur"
            blurDataURL={blurDataURL}
            onLoadingComplete={({ naturalWidth, naturalHeight }) => {
              setDownloadImageSize({
                width: naturalWidth,
                height: naturalHeight,
              });
            }}
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
            className={`z-50 border border-grey-200/30 pointer-events-none absolute`}
          />
        </div>
      </div>
    </div>
  );
};

export default ImageEffect;
