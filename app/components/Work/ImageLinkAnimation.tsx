import React from 'react'
import Image from "next/image";

interface Props {
  src: string;
  alt: string;
}

const ImageLinkAnimation: React.FC<Props> = ({ src, alt }: Props)=> {
  return (
    <div className="flex items-center justify-center from-teal-100 via-teal-300 to-teal-500 bg-gradient-to-br">
      <div className="overflow-hidden aspect-video md:aspect-square cursor-pointer relative group shadow-2xl">
        <div className="z-50 opacity-100 lg:opacity-0 group-hover:opacity-100 transition duration-300 ease-in-out cursor-pointer absolute from-black-100/80 to-transparent bg-gradient-to-t inset-x-0 -bottom-2 pt-30 text-white-100 flex items-end ">
          <div>
            <div className="transform-gpu p-4 space-y-3 text-xl group-hover:opacity-100 group-hover:translate-y-0 translate-y-4 pb-10 transition duration-300 ease-in-out">
              <div className="font-bold uppercase text-sm md:text-lg">{alt}</div>
            </div>
          </div>
        </div>
        <Image
          className="object-cover aspect-square -translate-y-12 md:translate-y-0 group-hover:scale-110 transition duration-300 ease-in-out "
          src={src}
          alt={alt}
          width={500}
          height={500}
        />
      </div>
    </div>
  )
}

export default ImageLinkAnimation

