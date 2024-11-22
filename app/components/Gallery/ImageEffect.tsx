"use client";
import React, {
  MouseEvent,
  TouchEvent,
  useState,
  useEffect,
  useCallback,
  useRef,
} from "react";
import Image from "next/image";
import useResizeObserver from "../../hooks/useResizeObserver";

type ImageEffectProps = {
  src: string;
  alt: string;
  blurDataURL: string | undefined;
  i: number;
};

type EventAction = "enter" | "move" | "leave";

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

  const imageContainerRef = useRef<HTMLDivElement>(null);

  const url = src.replace(/\(/g, "%28").replace(/\)/g, "%29");

  const handleEvent = (
    e: MouseEvent<HTMLDivElement> | TouchEvent<HTMLDivElement>,
    action: EventAction
  ) => {
    let clientX: number = 0;
    let clientY: number = 0;
    const isTouch = "touches" in e;

    if (action === "move" && isTouch) {
      clientX = e.touches[0].clientX;
      clientY = e.touches[0].clientY;
    } else if (action === "leave" && isTouch) {
      // For touch end events, use changedTouches
      if (e.changedTouches && e.changedTouches.length > 0) {
        clientX = e.changedTouches[0].clientX;
        clientY = e.changedTouches[0].clientY;
      }
    } else if (!isTouch) {
      clientX = e.clientX;
      clientY = e.clientY;
    }

    switch (action) {
      case "enter":
        let element = e.currentTarget;
        let { width, height } = element.getBoundingClientRect();
        setImageSize({ width, height });
        setZoomable(true);
        break;
      case "move":
        const { left, top } = e.currentTarget.getBoundingClientRect();
        let x = clientX - left;
        let y = clientY - top;
        setPosition({
          x: -x * ZOOM_LEVEL + MAGNIFIER_SIZE.width / 2,
          y: -y * ZOOM_LEVEL + MAGNIFIER_SIZE.height / 2,
          mouseX: x - MAGNIFIER_SIZE.width / 2,
          mouseY: y - MAGNIFIER_SIZE.height / 2,
        });
        break;
      case "leave":
        setZoomable(false);
        break;
    }
  };
  const onResize = useCallback((target: HTMLDivElement) => {
    const { width, height } = target.getBoundingClientRect();
    setInnerImageContainerSize({ width, height });
  }, []);

  const innerImageContainer = useResizeObserver(onResize);

  useEffect(() => {
    const imageContainer = imageContainerRef.current;
    const handleTouchMove: EventListener = (event: Event) => {
      const touchEvent = event as unknown as TouchEvent;
      touchEvent.preventDefault();
    };

    if (imageContainer) {
      imageContainer.addEventListener("touchmove", handleTouchMove, {
        passive: false,
      });
    }

    return () => {
      if (imageContainer) {
        imageContainer.removeEventListener("touchmove", handleTouchMove);
      }
    };
  }, []);

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
          ref={imageContainerRef}
          onMouseEnter={(e) => handleEvent(e, "enter")}
          onMouseMove={(e) => handleEvent(e, "move")}
          onMouseLeave={(e) => handleEvent(e, "leave")}
          onTouchStart={(e) => handleEvent(e, "enter")}
          onTouchMove={(e) => handleEvent(e, "move")}
          onTouchEnd={(e) => handleEvent(e, "leave")}
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
          {zoomable && (
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
          )}
        </div>
      </div>
    </div>
  );
};

export default ImageEffect;
