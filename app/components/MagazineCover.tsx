import React from "react";
import Image from "next/image";
import { getPlaiceholder } from "plaiceholder";
import fs from "node:fs/promises";

type MagazineCoverProps = {
  src: string;
  alt: string;
}

const MagazineCover: React.FC<MagazineCoverProps> = async ({ src, alt }: MagazineCoverProps) => {

  const buffer = await fs.readFile(`./public/${src}`);
  const { base64 } = await getPlaiceholder(buffer);
  return (
      <Image
        className="object-obtain m-auto md:m-0 p-1"
        src={src}
        alt={"image of " + alt + " cover"}
        width={200}
        height={285}
        sizes="(max-width: 480px) 66vw, (max-width: 768px) 50vw, 33vw"
        placeholder="blur"
        blurDataURL={base64}
      />
  );
};

export default MagazineCover;