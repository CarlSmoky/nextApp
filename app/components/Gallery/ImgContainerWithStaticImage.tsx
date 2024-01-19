import React from "react";
import Image from "next/image";
import { VisualArtImage } from "../../types/Interfaces";
import { blurData } from "./BlurData";
import Link from "next/link";

type Props = {
  image: VisualArtImage;
  numberOfImage: number;
  title : string;
};

const ImgContainer = ({ image, numberOfImage, title }: Props) => {
  return (
    <div className="w-[300px] h-[300px] md:w-[400px] md:h-[400px] m-1 relative bg-white-200/40 overflow-hidden group">
      <Link href={`/visual-art/${title}`}>
        <div className="w-[280px] h-[280px] md:w-[380px] md:h-[380px] absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
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
            sizes="(min-width: 1280px) 278px, (min-width: 1040px) calc(12.73vw + 118px), (min-width: 800px) 33.18vw, (min-width: 540px) 50vw, calc(100vw - 16px)"
            placeholder="blur"
            blurDataURL={blurData}
          />
        </div>
      </Link>
    </div>
  );
};

export default ImgContainer;
