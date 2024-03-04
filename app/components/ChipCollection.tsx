'use client'
import { useRouter } from 'next/navigation'
import ChipButton from "./ChipButton";
import { PerformanceType } from "../types/Interfaces";
import { getParams } from "../utils/datahandling";
import { makePath } from "../utils/datahandling";

type ChipsProps = {
  parsedQueryString: { type: string | string[] };
};

const ChipCollection: React.FC<ChipsProps> = ({ parsedQueryString }) => {
  const router = useRouter();
  const path = "/performance";
  const types = Object.values(PerformanceType);
  const params = getParams(parsedQueryString.type);

  const clickHandler = (params: PerformanceType[], types: PerformanceType[], type: PerformanceType, path: string): void => {
    const updatedPath = makePath(params, types, type, path)
    router.push(updatedPath)
    router.refresh();
  }

  const isSelected = (params: PerformanceType[], type: PerformanceType): boolean => {
    return params.length === 0 || params.includes(type) ? true : false;
  }

  const selectedAll = (params: PerformanceType[]) => {
    return  params.length === 0 ? true : false;
  }

  return (
    <div className="flex flex-wrap gap-3 text-xs md:text-sm font-paragraph text-grey-100">
      <ChipButton text="All" selectedAll={selectedAll(params)} clickHandler={() =>router.push(path)}/>
      {types.map((type: PerformanceType, i) => (
        <ChipButton key={i} type={type} isSelected={isSelected(params, type)} clickHandler={() =>clickHandler(params, types, type, path)}/>
      ))}
    </div>
  );
};

export default ChipCollection;
