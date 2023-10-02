import React from "react";
import SectionWrapper from "./SectionWrapper";
import ImageLink from "./ImageLink";
import ImageLinkAnimation from './ImageLinkAnimation'


const ImageLinkSection: React.FC = () => {
  return (
    <SectionWrapper title="work">
      <div className="flex flex-col gap-6 justify-between md:flex-row">
        <ImageLinkAnimation src="/images/performance.jpg" alt="performance"/>
        <ImageLinkAnimation src="/images/visual-art.jpg" alt="visual-art"/>
        <ImageLinkAnimation src="/images/nia-instruction.jpg" alt="nia instruction"/>
     </div>
    </SectionWrapper>
  );
};

export default ImageLinkSection;
