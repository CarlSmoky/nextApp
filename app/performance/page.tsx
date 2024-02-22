import React, { Suspense } from "react";
import type { Metadata } from "next";
import SectionWrapper from "../components/SectionWrapper";
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
    <SectionWrapper title="Performance">
      <Suspense fallback={<div>Loading...</div>}>
        <PerformanceList parsedQueryString={searchParams} />
      </Suspense>
    </SectionWrapper>
  );
};

export default PerformancePage;
