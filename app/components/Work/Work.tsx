import React, { Suspense } from "react";
import fs from "node:fs/promises";
import SectionwithTitle from "../SectionwithTitle";
import ImageLinkAnimation from "./ImageLinkAnimation";
import { imageLink } from "../../types/Interfaces";

const Work: React.FC = async () => {
  const file = await fs.readFile(process.cwd() + "/app/json/imageLinks.json","utf8");
  const data = JSON.parse(file);

  return (
    <SectionwithTitle title="Work">
        <div className="flex flex-col sm:flex-row gap-4">
          <Suspense fallback={<div className="m-auto"><p className="font-paragraph">Loading...</p></div>}>
            {data.imageLinks.map((imageLink: imageLink, i: number) => (
              <ImageLinkAnimation
                key={i}
                src={imageLink.src}
                name={imageLink.name}
                linkTo={imageLink.linkTo}
                i={i}
              />
            ))}
          </Suspense>
        </div>
    </SectionwithTitle>
  );
};

export default Work;
