import React from "react";
import type { Metadata } from "next";
import SectionWrapper from "../components/SectionWrapper";
import { performanceData } from "./performanceData";
import { Performance, PerformanceType } from "../types/Interfaces";
import ImageAndText from "../components/ImageAndText";
import VideoWrapper from "../components/VideoWrapper";
import PerformanceInfo from "../components/PerformanceInfo";

export const metadata: Metadata = {
  title: "Performance",
};

const PerformancePage = ({ searchParams }: { searchParams: { type: string | string[] } }) => {

  const getParams = (searchParams: string | string[]): PerformanceType[] => {
    if (!searchParams) return []

    if (typeof(searchParams) === "string") {
      return [searchParams as PerformanceType]
    }

      return searchParams
      .filter(item => Object.values(PerformanceType)
      .includes(item as PerformanceType))
      .map(item => item as PerformanceType);
  }

  const applyFilter = (params: PerformanceType[]): Performance[] => {
    if (params.length === 0) return performanceData

    const result = performanceData.filter(performance => params.includes(performance.type))
    return result
  }

  const params = getParams(searchParams.type)
  const filteredPerformanceData = applyFilter(params)

  return (
    <SectionWrapper title="Performance">
      {filteredPerformanceData.map((performance: Performance, i) => (
        
        <ImageAndText key={i}>
          <VideoWrapper VideoId={performance.VideoId} title={performance.title} />
          <PerformanceInfo title={performance.title} subTitle={performance.subTitle} type={performance.type} event={performance.event} location={performance.location} date={performance.date} VideoId={performance.VideoId}/>
        </ImageAndText>
      ))}
    </SectionWrapper>
  );
};

export default PerformancePage;
