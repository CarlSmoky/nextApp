import React, { Suspense } from "react";
import fs from "node:fs/promises";
import ImgContainerWithStaticImage from "./ImgContainerWithStaticImage";
import { VisualArtSeries } from "@/app/types/Interfaces";

const GalleryWithStaticImage: React.FC = async () => {
  const file = await fs.readFile(
    process.cwd() + "/app/data/visualArtData.json",
    "utf8"
  );
  const data = JSON.parse(file);

  if (!data) return <h2 className="m-4 text-sxl font-bold">No images Found</h2>;

  return (
    <ul className="flex flex-col md:flex-row flex-wrap">
      <Suspense
        fallback={
          <div className="m-auto">
            <p className="font-paragraph">Loading...</p>
          </div>
        }
      >
        {data.visualArtData.map((series: VisualArtSeries) => (
          <ImgContainerWithStaticImage
            image={series.images[0]}
            numberOfImage={series.images.length}
            title={series.title}
            key={series.title}
          />
        ))}
      </Suspense>
    </ul>
  );
};

export default GalleryWithStaticImage;
