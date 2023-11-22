import React from 'react'
import Image from "next/image"


interface Props {
  src: string;
  alt: string;
}

const ImageWrapper: React.FC<Props> = ({ src, alt }: Props) => {
  return (
    <div className="m-auto md:mt-0 md:ml-0">
      <Image src={src} alt={alt} height={400} width={400} />
    </div>
  )
}

export default ImageWrapper