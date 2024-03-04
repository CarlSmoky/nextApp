import ChipButton from "./ChipButton";
import { PerformanceType } from "../types/Interfaces";
import { getParams } from "../utils/datahandling";

type ChipsProps = {
  parsedQueryString: { type: string | string[] };
  path: string;
};

const ChipCollection: React.FC<ChipsProps> = ({ parsedQueryString, path }) => {
  const types = Object.values(PerformanceType);
  const params = getParams(parsedQueryString.type);
  
  const selectedType = (params: PerformanceType[], type: PerformanceType): boolean => {
    return params.length === 0 || params.includes(type) ? true : false;
  }

  const disabled = (params: PerformanceType[], type: PerformanceType): boolean => {
    return params.includes(type) ? true : false;
  }

  const selectedAll = (params: PerformanceType[]): boolean => {
    return  params.length === 0 ? true : false;
  }

  return (
    <div className="flex flex-wrap gap-3 text-xs md:text-sm font-paragraph text-grey-100">
      <ChipButton href={path} selectedType={false} selectedAll={selectedAll(params)} disabled={selectedAll(params)}/>
      {types.map((type: PerformanceType, i) => (
        <ChipButton key={i} href={`${path}?type=${type}`} type={type} selectedType={selectedType(params, type)} selectedAll={false} disabled={disabled(params, type)}/>
      ))}
    </div>
  );
};

export default ChipCollection;
