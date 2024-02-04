import React from "react";
import Image from "next/image";
import { VisualArtImage } from "../../types/Interfaces";
import { blurData } from "./BlurData";
import Link from "next/link";

type Props = {
  image: VisualArtImage;
  numberOfImage: number;
  title: string;
  i: number;
};

const ImgContainer = ({ image, numberOfImage, title, i }: Props) => {
  return (
    <div className="w-full md:w-[calc(50%-8px)] lg:w-[calc(33.3%-8px)] bg-white-200/40 aspect-square relative my-1 md:m-1">
      <div className="w-[99%] h-[99%] m-auto">
        <Link href={`/visual-art/${title}`} target="_blank">
        <div className="w-[96%] h-[96%] absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
            {numberOfImage > 1 && (
              <span className="absolute right-0 p-1 text-white-100 font-title text-sm bg-grey-200/30 rounded-xl z-10">
                1/{numberOfImage}
              </span>
            )}
            <Image
              src={image.src}
              alt={image.alt}
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
