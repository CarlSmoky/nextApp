import React from "react";
import SectionWrapper from "./SectionWrapper";
import ImageLink from "./ImageLink";


const ImageLinkSection: React.FC = () => {
  return (
    <SectionWrapper title="work">
      <div className="flex flex-col gap-6 justify-between md:flex-row">
        <ImageLink src="/images/performance.jpg" alt="performance"/>
        <ImageLink src="/images/visual-art.jpg" alt="visual-art"/>
        <ImageLink src="/images/nia-instruction.jpg" alt="nia instruction"/>
     </div>
    </SectionWrapper>
  );
};

export default ImageLinkSection;
