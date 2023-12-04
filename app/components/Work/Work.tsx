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
    <SectionWrapper title="work">
      <div className="flex flex-col gap-6 pt-3 md:pt-6 justify-between md:flex-row">
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
