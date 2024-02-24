import React from "react";
import { performanceData } from "../performance/performanceData";
import { Performance } from "../types/Interfaces";
import { applyFilter, getParams } from "../utils/datahandling";
import PerformanceListItem from "./PerformanceListItem";

interface PerformanceListProps {
  parsedQueryString: { type: string | string[] }
}

const PerformanceList:React.FC<PerformanceListProps>= ({ parsedQueryString }) => {
  const params = getParams(parsedQueryString.type);
  // performanceData is currently static 
  const filteredData = applyFilter(params, performanceData);  
  const performanceListItems = filteredData.map((performance: Performance, i) => 
    <PerformanceListItem key={i} item={performance}/>
  )
  return (
    <ul>
    {performanceListItems}
    </ul>
  );
};

export default PerformanceList;