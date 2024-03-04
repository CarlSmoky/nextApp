import React, { Suspense } from "react";
import type { Metadata } from "next";
import SectionwithTitle from "../components/SectionwithTitle";
import ChipCollection from "../components/ChipCollection";
import PerformanceList from "../components/PerformanceList";

export const metadata: Metadata = {
  title: "Performance",
};

const PerformancePage = ({
  searchParams,
}: {
  searchParams: { type: string | string[] };
}) => {
  return (
    <SectionwithTitle title="Performance">
      <ChipCollection parsedQueryString={searchParams}/>
      <Suspense fallback={<div>Loading...</div>}>
        <PerformanceList parsedQueryString={searchParams} />
      </Suspense>
    </SectionwithTitle>
  );
};

export default PerformancePage;
