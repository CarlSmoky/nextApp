import React from "react";
import Image from "next/image";
// import { PhotoSchema } from "../types/Interfaces";
import type { Photo } from '../models/images'

// type Props = {
//   photo: PhotoSchema;
// };

type Props = {
  photo: Photo
}

const ImgContainer = ({ photo }: Props) => {
  return (
    <div style={{width: '250px', height: '250px', position: 'relative', margin: 'auto'}} className="h-64 bg-black-100 rounded-xl  overflow-hidden group">
      <div style={{width: '230px', height: '230px', position: 'relative'}} className={`top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2`}>
        <Image
          src={photo.src.large}
          alt={photo.alt}
          fill={true}
          className="object-contain group-hover:opacity-75"
          sizes="(min-width: 1280px) 278px, (min-width: 1040px) calc(12.73vw + 118px), (min-width: 800px) 33.18vw, (min-width: 540px) 50vw, calc(100vw - 16px)"
          placeholder="blur"
          blurDataURL={photo.blurredDataUrl}
        />
      </div>
    </div>
  );
};

export default ImgContainer;
