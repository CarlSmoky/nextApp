import { PerformanceType, Performance } from "../types/Interfaces";

export const getParams = (searchParams: string | string[]): PerformanceType[] => {
  if (!searchParams) return [];

  if (typeof searchParams === "string") {
    return [searchParams as PerformanceType];
  }

  return searchParams
    .filter((item) =>
      Object.values(PerformanceType).includes(item as PerformanceType)
    )
    .map((item) => item as PerformanceType);
};

export const applyFilter = (params: PerformanceType[], rawData: Performance[]): Performance[] => {
  let displayData = rawData
  if (params.length === 0) return displayData;

  displayData = displayData.filter((performance) =>
    params.includes(performance.type)
  );
  return displayData;
};