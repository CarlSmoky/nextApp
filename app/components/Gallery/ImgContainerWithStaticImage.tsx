"use client"
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
  title,
}) => {
  const [isLoaded, setIsLoaded] = useState(false)

  return (
    <>
      <li className="flex items-center justify-center w-full md:w-[calc(50%-16px)] lg:w-[calc(33.3%-16px)] shadow-2xl bg-white-200/40 aspect-square my-2 md:m-2 active:ring active:ring-white-100 relative">
        <Link
          href={`/visual-art/${title.toLowerCase()}`}
          className="flex items-center justify-center"
        >
          <div className="w-[95%] h-[95%] lg:hover:scale-[1.02] transition duration-300 ease-in-out absolute">
            <Image
              src={image.src}
              alt={image.title}
              fill={true}
              className={`object-contain z-20 ${
                !isLoaded && "blur-2xl"
              } liner duration-500`}
              sizes="(max-width: 768px) 100vw, (max-width: 976px) 50vw, 33vw"
              onLoadingComplete={() => setIsLoaded(true)}
            />
          </div>
        </Link>
        {numberOfImage > 1 && (
          <span
            className={`absolute right-1 top-1 p-1 text-white-100 font-title text-sm bg-grey-200/30 rounded-xl z-10} z-20 ${
              !isLoaded && "blur-2xl"
            } liner duration-500`}
          >
            1/{numberOfImage}
          </span>
        )}
      </li>
    </>
  );
};

export default ImgContainer;
