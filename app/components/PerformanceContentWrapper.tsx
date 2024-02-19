"use client";
import React, { useEffect, useState } from "react";
import ImageAndText from "../components/ImageAndText";
import VideoWrapper from "../components/VideoWrapper";
import PerformanceInfo from "../components/PerformanceInfo";
import { performanceData } from "../performance/performanceData";
import { Performance } from "../types/Interfaces";
import { applyFilter, getParams } from "../utils/datahandling";

interface Props {
  parsedQueryString: { type: string | string[] }
}

const PerformanceContentWrapper:React.FC<Props>= ({ parsedQueryString }) => {
  const [data, setData] = useState<Performance[]>([]);
  useEffect(() => {
    const params = getParams(parsedQueryString.type);

    // performanceData is currently static 
    const filteredData = applyFilter(params, performanceData);
    setData(filteredData);
  }, [parsedQueryString]);

  if (data.length === 0 ) return <div>Loading...</div>
  return (
    <>
      {data.map((performance: Performance, i) => (
        <ImageAndText key={i}>
          <VideoWrapper
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

export default PerformanceContentWrapper;
