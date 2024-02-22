import React from "react";
import ImageAndText from "./ImageAndText";
import Video from "./Video";
import PerformanceInfo from "./PerformanceInfo";
import { performanceData } from "../performance/performanceData";
import { Performance } from "../types/Interfaces";
import { applyFilter, getParams } from "../utils/datahandling";

interface Props {
  parsedQueryString: { type: string | string[] }
}

const PerformanceList:React.FC<Props>= ({ parsedQueryString }) => {
  const params = getParams(parsedQueryString.type);
  // performanceData is currently static 
  const filteredData = applyFilter(params, performanceData);
  
  return (
    <>
      {filteredData.map((performance: Performance, i) => (
        <ImageAndText key={i}>
          <Video
            VideoId={performance.VideoId}
            title={performance.title}
          />
          <PerformanceInfo
            title={performance.title}
            subTitle={performance.subTitle}
            type={performance.type}
            event={performance.event}
            location={performance.location}
            date={performance.date}
            VideoId={performance.VideoId}
          />
        </ImageAndText>
      ))}
    </>
  );
};

export default PerformanceList;
