import React from "react";
import { Performance } from "../types/Interfaces";
import { getPerformanceTypeName } from "../utils/textFormat";

const PerformanceInfo: React.FC<Performance> = ({
  title,
  subTitle,
  type,
  event,
  location,
  date,
}: Performance) => {
  return (
    <div className="w-auto mt-4 mb-10 md:mt-0 md:ml-8 md:w-1/2 text-left text-grey-100  tracking-wide">
      <h3 className="font-title font-bold text-lg md:text-xl lg:text-2xl">{title}</h3>
      {subTitle && <h4 className="text-sm font-paragraph">{subTitle}</h4>}
      <div className="text-base lg:text-lg font-paragraph">
        <p>
          <span className="text-sm">Type: </span> 
          {getPerformanceTypeName(type)}
        </p>
        <p>
          <span className="text-sm">Event: </span>
          {event}
        </p>
        <p>
          <span className="text-sm">Location: </span>
          {location}
        </p>
        <p>
          <span className="text-sm">Date: </span>
          {date}
        </p>
      </div>
    </div>
  );
};

export default PerformanceInfo;
