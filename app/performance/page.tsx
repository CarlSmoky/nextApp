import React, { Suspense } from "react";
import type { Metadata } from "next";
import SectionWrapper from "../components/SectionWrapper";
import PerformanceContentWrapper from "../components/PerformanceContentWrapper";

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
        <PerformanceContentWrapper parsedQueryString={searchParams} />
      </Suspense>
    </SectionWrapper>
  );
};

export default PerformancePage;
