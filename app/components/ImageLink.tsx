import React from 'react'
import Image from "next/image";

interface Props {
  src: string;
  alt: string;
}

const ImageLink: React.FC<Props> = ({ src, alt }: Props)=> {
  return (
    <div className="w-[300px] h-[300px] md:w-[400px] md:h-[400px] lg:w-[300px] lg:h-[300px]relative m-auto rounded-lg shadow-none transition-all duration-300 ease-in-out hover:shadow-lg hover:shadow-black/30  active:translate-y-2">
        <Image
          src={src}
          alt={alt}
          layout="fill"
          objectFit="cover"
          className="rounded-lg"
        />
      </div>
  )
}

export default ImageLink