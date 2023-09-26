import React, { Children } from "react";
import ImageWrapper from "./ImageWrapper"
import ParagraphWrapper from "./ParagraphWrapper";
import { ImgAndParagraphProps } from "../types/Interfaces"


const ImageAndText: React.FC<ImgAndParagraphProps> = ({ src, alt, paragraph }: ImgAndParagraphProps) => {
  return (
    <div className="flex flex-col justify-center md:flex-row">
      <ImageWrapper src={src} alt={alt} />
      <ParagraphWrapper paragraph={paragraph} />
    </div>
  );
};

export default ImageAndText;
