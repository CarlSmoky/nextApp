import React from "react";
import Image from "next/image";
import Link from "next/link";
import fs from "node:fs/promises";
import { getPlaiceholder } from "plaiceholder";

interface Props {
  src: string;
  name: string;
  linkTo: string;
  i: number;
}

const ImageLinkAnimation: React.FC<Props> = async ({
  src,
  name,
  linkTo,
  i,
}: Props) => {
  const buffer = await fs.readFile(`./public/${src}`);
  const { base64 } = await getPlaiceholder(buffer);

  return (
    <Link
      href={linkTo}
      prefetch={false}
      className="w-full g-image-link"
    >
      <div className="flex from-teal-100 via-teal-300 to-teal-500 bg-gradient-to-br shadow-2xl active:ring active:ring-white-100 cursor-pointer">
        <div className="relative w-full aspect-video sm:aspect-square overflow-hidden group">
          <div className="absolute z-10 opacity-100 lg:opacity-0 lg:group-hover:opacity-100 transition duration-300 ease-in-out from-black-100/80 to-transparent bg-gradient-to-t inset-x-0 -bottom-2 pt-30 text-white-100 flex items-end">
            <div className="transform-gpu p-4 space-y-3 text-xl lg:group-hover:translate-y-0 translate-y-4 pb-10 transition duration-300 ease-in-out">
              <div className="font-bold text-sm md:text-lg">{name}</div>
            </div>
          </div>
          <Image
            className="object-cover lg:group-hover:scale-110 transition duration-300 ease-in-out"
            src={src}
            alt={"image link to " + name}
            fill={true}
            sizes="(max-width: 480px) 100vw, 33vw"
            placeholder="blur"
            blurDataURL={base64}
          />
        </div>
      </div>
    </Link>
  );
};

export default ImageLinkAnimation;
