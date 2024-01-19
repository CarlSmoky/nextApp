import React from "react";
import Image from "next/image";
import { blurData } from "./Gallery/BlurData";

interface Props {
  src: string;
  alt: string;
}

const ArtImageWrapper: React.FC<Props> = ({ src, alt }: Props) => {
  return (
    <div className="m-auto md:mt-0 md:ml-0 w-full md:w-1/2 bg-white-200/40">
      <Image
        src={src}
        alt={alt}
        width={0}
        height={0}
        sizes="100vw"
        style={{ width: "100%", height: "100%", objectFit: "cover" }}
        placeholder="blur"
        blurDataURL={blurData}
      />
    </div>
  );
};

export default ArtImageWrapper;
