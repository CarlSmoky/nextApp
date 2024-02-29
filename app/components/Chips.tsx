'use client'
import { useRouter } from 'next/navigation'
import ChipButton from "./ChipButton";
import { PerformanceType } from "../types/Interfaces";
import { getParams } from "../utils/datahandling";
import { IoCheckmark } from "react-icons/io5";

type ChipsProps = {
  parsedQueryString: { type: string | string[] };
};

const Chips: React.FC<ChipsProps> = ({ parsedQueryString }) => {
  const router = useRouter();
  const path = "/performance";
  const types = Object.values(PerformanceType);
  const params = getParams(parsedQueryString.type);

  return (
    <div className="flex flex-wrap gap-2 text-xs md:text-sm font-paragraph text-grey-100">
      <button
        key={0}
        className={`flex justify-center rounded-full border border-grey-100/20 p-[0.5rem] min-w-[4rem] whitespace-nowrap  ${
          (params.length === 0) ? "outline outline-offset-2 outline-2 outline-grey-100/50" : "hover:bg-grey-100/80 hover:text-white-100 transition ease-in-out"
        }`}
        onClick={() => router.push(path)}
        disabled={params.length === 0}
      >
        {params.length === 0 && <IoCheckmark className='my-auto mr-1'/>}
        All
      </button>
      {types.map((type: PerformanceType, i) => (
        <ChipButton key={i} params={params} type={type} path={path} types={types}/>
      ))}
    </div>
  );
};

export default Chips;
