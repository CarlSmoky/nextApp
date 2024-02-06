import React from "react";
import Image from "next/image";
import { blurData } from "./Gallery/BlurData";

interface Props {
  src: string;
  alt: string;
}

const ImageWrapper: React.FC<Props> = ({ src, alt }: Props) => {
  return (
    <div className="w-2/3 sm:w-1/2 md:w-1/3 aspect-square m-auto md:mt-0 relative">
      <Image
        className="object-cover rounded-full md:rounded-none"
        src={src}
        alt={alt}
        fill={true}
        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw"
        placeholder="blur"
        blurDataURL={blurData}
      />
    </div>
  );
};

export default ImageWrapper;
