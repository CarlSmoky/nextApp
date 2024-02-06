"use client";
import React, { useContext } from "react";
import Image from "next/image";
import { DisplayNavContext } from "@/app/provider/DisplayNavProvider";
import { VisualArtImage, NavState } from "../../types/Interfaces";
import { blurData } from "./BlurData";
import Link from "next/link";

type Props = {
  image: VisualArtImage;
  numberOfImage: number;
  title: string;
  i: number;
};

const ImgContainer = ({ image, numberOfImage, title, i }: Props) => {
  const navContext = useContext(DisplayNavContext);
  return (
    <div className="w-full md:w-[calc(50%-16px)] lg:w-[calc(33.3%-16px)] bg-white-200/40 aspect-square my-2 md:m-2 shadow-xl active:ring active:ring-white-100 relative">
      <div className="w-[97%] h-[97%] m-auto">
        <Link href={`/visual-art/${title.toLowerCase()}`} onClick={() => navContext?.setCurrentNav(NavState.visualArt)}>
        <div className="w-[93%] h-[93%] absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 hover:scale-105 transition duration-300 ease-in-out">
            {numberOfImage > 1 && (
              <span className="absolute right-0 p-1 text-white-100 font-title text-sm bg-grey-200/30 rounded-xl z-10">
                1/{numberOfImage}
              </span>
            )}
            <Image
              src={image.src}
              alt={image.title}
              fill={true}
              className="object-contain"
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              placeholder="blur"
              blurDataURL={blurData}
              priority={i === 0 ? true : false}
            />
          </div>
        </Link>
      </div>
    </div>
  );
};

export default ImgContainer;
