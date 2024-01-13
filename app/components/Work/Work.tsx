"use client";
import React, { useContext } from "react";
import Link from "next/link";
import { DisplayNavContext} from "../../provider/DisplayNavProvider";
import SectionWrapper from "../SectionWrapper";
import ImageLinkAnimation from "./ImageLinkAnimation";
import { imageLinks } from './imageLinks'
import { WorkLink } from "../../types/Interfaces";

const Work: React.FC = () => {
  const navContext = useContext(DisplayNavContext);

  return (
    <SectionWrapper title="Work">
      <div className="flex flex-col sm:flex-row gap-6 xl:gap-28 pt-3 md:pt-6 justify-between">
        {imageLinks.map((imageLink: WorkLink, i) => (
          <Link onClick={() => navContext?.setCurrentNav(imageLink.navState)} href={imageLink.linkTo} key={i}>
            <ImageLinkAnimation src={imageLink.src} alt={imageLink.name} />
          </Link>
        )
        )}
      </div>
    </SectionWrapper>
  );
};

export default Work;
