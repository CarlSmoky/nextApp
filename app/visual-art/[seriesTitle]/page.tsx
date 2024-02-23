import React from "react";
import SectionwithTitle from "../../components/SectionwithTitle";
import SquareImage from "../../components/SquareImage";
import ArtInfo from "../../components/ArtInfo";
import { visualArtData } from "../VisualArtData";
import { toTitleCase } from "../../utils/textFormat";
import { VisualArtType } from "../../types/Interfaces";
import PageNotFound from "../../components/PageNotFound";

const page = ({ params }: { params: { seriesTitle: string } }) => {
  const seriesInfo = visualArtData.filter(
    (series) => series.title.toLowerCase() === params.seriesTitle.toLowerCase()
  )[0];
  if (!seriesInfo)
    return (
      <PageNotFound text="Back to Visual Art page" src="/visual-art"/>
    );

  return (
    <SectionwithTitle title={toTitleCase(params.seriesTitle)}>
      <div className="text-base lg:text-lg font-paragraph">
        <p>
          <span className="text-sm">Type: </span>
          {toTitleCase(seriesInfo.type as VisualArtType)}
        </p>
        {seriesInfo.descriptions && <p>{seriesInfo.descriptions}</p>}
      </div>
      {visualArtData
        .filter((series) => series.title.toLowerCase() === params.seriesTitle.toLowerCase())[0]
        .images.map((image, i) => (
          <div className="flex-wrapper" key={i}>
            <SquareImage src={image.src} alt={image.title} i={i}/>
            <ArtInfo
              title={toTitleCase(image.title)}
              size={image.size}
              media={image.media}
              year={image.year}
            />
          </div>
        ))}
    </SectionwithTitle>
  );
};

export default page;
