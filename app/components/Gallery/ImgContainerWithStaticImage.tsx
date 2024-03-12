"use client";
import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import type { VisualArtImage } from "../../types/Interfaces";

type ImgContainerProps = {
  image: VisualArtImage;
  numberOfImage: number;
  title: string;
};

const ImgContainer: React.FC<ImgContainerProps> = ({
  image,
  numberOfImage,
  title
}) => {
  const [isLoaded, setIsLoaded] = useState(false);

  return (
    <li className="w-full md:w-[calc(50%-16px)] lg:w-[calc(33.3%-16px)] bg-white-200/40 aspect-square my-2 md:m-2 shadow-xl active:ring active:ring-white-100 relative">
      <Link href={`/visual-art/${title.toLowerCase()}`}>
        <div className="w-[95%] h-[95%] absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 lg:hover:scale-[1.02] transition duration-300 ease-in-out">
          {numberOfImage > 1 && (
            <span className={`absolute right-0 p-1 text-white-100 font-title text-sm bg-grey-200/30 rounded-xl z-10 ${!isLoaded && "blur-2xl"
          }`}>
              1/{numberOfImage}
            </span>
          )}
          <Image
            src={image.src}
            alt={image.title}
            fill={true}
            className={`object-contain ${
              !isLoaded && "blur-2xl"
            } liner duration-500`}
            sizes="(max-width: 768px) 100vw, (max-width: 976px) 50vw, 33vw"
            placeholder="blur"
            blurDataURL={image.blurredDataUrl}
            onLoadingComplete={() => {
              setIsLoaded(true);
            }}
          />
        </div>
      </Link>
    </li>
  );
};

export default ImgContainer;
