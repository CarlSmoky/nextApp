import React from "react";
import Image from "next/image";

interface Props {
  src: string;
  alt: string;
  i: number;
}

const ArtImageWrapper: React.FC<Props> = ({ src, alt, i }: Props) => {
  return (
    <div className="w-full md:w-1/2 bg-white-200/40 aspect-square relative">
      <div className="w-[97%] h-[97%] m-auto">
        <div className="w-[93%] h-[93%] absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
          <Image
            src={src}
            alt={alt}
            fill={true}
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw"
            className="object-contain"
            priority={i === 0 ? true : false}
          />
        </div>
      </div>
    </div>
  );
};

export default ArtImageWrapper;
