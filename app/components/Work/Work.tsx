import React from "react";
import Link from "next/link";
import SectionWrapper from "../SectionWrapper";
import ImageLinkAnimation from "./ImageLinkAnimation";
import { imageLinks } from './imageLinks'

const Work: React.FC = () => {
  return (
    <SectionWrapper title="work">
      <div className="flex flex-col gap-6 pt-3 md:pt-6 pb-20 justify-between md:flex-row">
        {imageLinks.map((imageLink,i) => (
          <Link href={imageLink.linkTo} key={i}>
            <ImageLinkAnimation src={imageLink.src} alt={imageLink.name} />
          </Link>
        )
        )}
      </div>
    </SectionWrapper>
  );
};

export default Work;
