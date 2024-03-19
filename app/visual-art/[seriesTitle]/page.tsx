import React from "react";
import fs from "node:fs/promises";
import path from 'path'
import getConfig from 'next/config'
import SectionwithTitle from "../../components/SectionwithTitle";
import { toTitleCase } from "../../utils/textFormat";
import type { VisualArtType, VisualArtSeries } from "../../types/Interfaces";
import PageNotFound from "../../components/PageNotFound";
import VisualArtList from "@/app/components/VisualArtList";


const page = async ({ params }: { params: { seriesTitle: string } }) => {
  const { serverRuntimeConfig } = getConfig()
  const file = await fs.readFile(path.join(serverRuntimeConfig.PROJECT_ROOT, '/app/data/visualArtData.json'), "utf8")
  const data = JSON.parse(file);

  const seriesInfo = data.visualArtData.filter(
    (series: VisualArtSeries) => series.title.toLowerCase() === params.seriesTitle.toLowerCase()
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
      <VisualArtList item={seriesInfo}/>
    </SectionwithTitle>
  );
};

export default page;
