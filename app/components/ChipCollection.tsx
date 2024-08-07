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

  const isSelectedType = (params: PerformanceType[], type: PerformanceType): boolean => {
    return params.length === 0 || params.includes(type);
  };

  const isDisabled = (params: PerformanceType[], type: PerformanceType): boolean => {
    return params.includes(type);
  };

  const isSelectedAll = (params: PerformanceType[]): boolean => {
    return params.length === 0;
  };

  return (
    <div
      className="flex flex-wrap gap-3 text-xs md:text-sm font-paragraph text-grey-100"
      role="listbox"
      aria-label="Performance Types"
    >
      <ChipButton href={path} selectedAll={isSelectedAll(params)} disabled={isSelectedAll(params)} />
      {types.map((type: PerformanceType, i) => (
        <ChipButton
          key={i}
          href={`${path}?type=${type}`}
          type={type}
          selectedType={isSelectedType(params, type)}
          selectedAll={false}
          disabled={isDisabled(params, type)}
        />
      ))}
    </div>
  );
};

export default ChipCollection;
