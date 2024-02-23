import React from "react";
import { toTitleCase } from "../utils/textFormat";

interface Props {
  title: string;
  size: string;
  media: string;
  year: number;
}

const ArtInfo: React.FC<Props> = ({ title, size, media, year }: Props) => {
  return (
    <div className="w-auto mt-4 mb-10 md:mt-0 md:ml-8 md:w-1/2 text-left text-grey-100  tracking-wide">
      <h3 className="font-title font-bold text-lg md:text-xl lg:text-2xl">
        {title}
      </h3>
      <div className="text-base lg:text-lg font-paragraph">
        {media && (
          <p>
            <span className="text-sm">Media: </span>
            {toTitleCase(media)}
          </p>
        )}
        {size && (
          <p>
            <span className="text-sm">Size: </span>
            {size}
          </p>
        )}
        {year && (
          <p>
            <span className="text-sm">Year: </span>
            {year}
          </p>
        )}
      </div>
    </div>
  );
};

export default ArtInfo;
