import React from "react";
import Image from "next/image";
import { PhotoSchema } from "../../types/Interfaces";
import {blurData} from "./BlurData"

type Props = {
  photo: PhotoSchema;
};


const ImgContainer = ({ photo }: Props) => {
  return (
    <div className="w-[300px] h-[300px] md:w-[400px] md:h-[400px] m-1 relative bg-white-100/40 overflow-hidden group">
      <div className="w-[280px] h-[280px] md:w-[380px] md:h-[380px] absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
        <Image
          src={photo.src}
          alt={photo.alt}
          fill={true}
          className="object-contain group-hover:opacity-75"
          placeholder="blur"
          blurDataURL={blurData}
        />
      </div>
    </div>
  );
};

export default ImgContainer;
