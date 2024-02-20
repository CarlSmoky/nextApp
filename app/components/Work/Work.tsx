import React from "react";
import SectionWrapper from "../SectionWrapper";
import ImageLinkAnimation from "./ImageLinkAnimation";
import { imageLinks } from "./imageLinks";

const Work: React.FC = () => {
  return (
    <SectionWrapper title="Work">
      <div className="flex flex-col sm:flex-row gap-4">
        {imageLinks.map((imageLink, i) => (
          <ImageLinkAnimation
            key={i}
            src={imageLink.src}
            name={imageLink.name}
            linkTo={imageLink.linkTo}
            i={i}
          />
        ))}
      </div>
    </SectionWrapper>
  );
};

export default Work;
