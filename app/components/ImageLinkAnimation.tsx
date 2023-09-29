import React from 'react'
import Image from "next/image";

interface Props {
  src: string;
  alt: string;
}

const ImageLink: React.FC<Props> = ({ src, alt }: Props)=> {
  return (
    <div className="flex items-center justify-center from-teal-100 via-teal-300 to-teal-500 bg-gradient-to-br">
      <div className="overflow-hidden aspect-video sm:aspect-square cursor-pointer rounded-xl relative group transition duration-300 ease-in-out hover:shadow-lg md:active:translate-y-2">
        <div className="rounded-xl z-50 text-pink-500 opacity-0 group-hover:opacity-100 transition duration-300 ease-in-out cursor-pointer text-white absolute from-black/80 to-transparent bg-gradient-to-t inset-x-0 -bottom-2 pt-30 flex items-end">
          <div>
            <div className="transform-gpu p-4 space-y-3 text-xl group-hover:opacity-100 group-hover:translate-y-0 translate-y-4 pb-10 transition duration-300 ease-in-out">
              <div className="font-bold uppercase bg-white text-sm md:text-lg">{alt}</div>
            </div>
          </div>
        </div>
        <Image
          className="object-cover aspect-square group-hover:scale-110 transition duration-300 ease-in-out"
          src={src}
          alt={alt}
          width={300}
          height={300}
        />
      </div>
    </div>
  )
}

export default ImageLink

