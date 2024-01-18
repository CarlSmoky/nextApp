import React from "react";
import type { Metadata } from "next";
import SectionWrapper from "../components/SectionWrapper";
import { performanceData } from "./performanceData";
import { Performance } from "../types/Interfaces";
import ImageAndText from "../components/ImageAndText";
import VideoWrapper from "../components/VideoWrapper";
import PerformanceInfo from "../components/PerformanceInfo";

export const metadata: Metadata = {
  title: "Performance",
};

const PerformancePage = () => {
  return (
    <SectionWrapper title="Performance">
      {performanceData.map((performance: Performance, i) => (
        
        <ImageAndText key={i}>
          <VideoWrapper src={performance.url} title={performance.title} />
          <PerformanceInfo title={performance.title} additionalTitle={performance.additionalTitle} subTitle={performance.subTitle} category={performance.category} event={performance.event} location={performance.location} date={performance.date} url={performance.url}/>
        </ImageAndText>
      ))}
    </SectionWrapper>
  );
};

export default PerformancePage;
