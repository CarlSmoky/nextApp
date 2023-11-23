import React from "react";
import Link from "next/link";
import SectionWrapper from "../SectionWrapper";
import ImageLinkAnimation from "./ImageLinkAnimation";

const ImageLinkSection: React.FC = () => {
  return (
    <SectionWrapper title="work">
      <div className="flex flex-col gap-6 justify-between md:flex-row">
        <Link href="/performance">
          <ImageLinkAnimation src="/images/performance.jpg" alt="performance" />
        </Link>
        <Link href="/visual-art">
          <ImageLinkAnimation src="/images/visual-art.jpg" alt="visual-art" />
        </Link>
        <Link href="/nia-instruction">
          <ImageLinkAnimation
            src="/images/nia-instruction.jpg"
            alt="nia instruction"
          />
        </Link>
      </div>
    </SectionWrapper>
  );
};

export default ImageLinkSection;
