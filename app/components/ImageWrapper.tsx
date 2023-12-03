import React from 'react'
import Image from "next/image"


interface Props {
  src: string;
  alt: string;
}

const ImageWrapper: React.FC<Props> = ({ src, alt }: Props) => {
  return (
    <div className="m-auto md:mt-0 md:ml-0 w-2/3 sm:w-1/2 lg:w-auto shadow-2xl">
      <Image className="m-auto md:mt-0 md:ml-0 object-cover aspect-square rounded-full md:rounded-none" src={src} alt={alt} height={400} width={400} />
    </div>
  )
}

export default ImageWrapper