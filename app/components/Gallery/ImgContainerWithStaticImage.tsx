import React from "react";
import Image from "next/image";
import { PhotoSchema } from "../../types/Interfaces";
import {blurData} from "./BlurData"

type Props = {
  photo: PhotoSchema;
};


const ImgContainer = ({ photo }: Props) => {
  return (
    <div className="w-[300px] h-[300px] lg:w-[400px] lg:h-[400px] m-2 lg:m-4 relative bg-black-100 rounded-xl overflow-hidden group">
      <div className={`w-[280px] h-[280px] lg:w-[370px] lg:h-[370px] relative top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2`}>
        <Image
          src={photo.src}
          alt={photo.alt}
          fill={true}
          className="object-contain group-hover:opacity-75"
          sizes="(min-width: 1280px) 278px, (min-width: 1040px) calc(12.73vw + 118px), (min-width: 800px) 33.18vw, (min-width: 540px) 50vw, calc(100vw - 16px)"
          placeholder="blur"
          blurDataURL={blurData}
        />
      </div>
    </div>
  );
};

export default ImgContainer;
