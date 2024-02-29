'use client'
import { useRouter } from 'next/navigation'
import { IoCheckmark } from "react-icons/io5";
import { toTitleCase } from "../utils/textFormat";
import { makePath } from "../utils/datahandling";
import { PerformanceType } from "../types/Interfaces";


type ChipButtonProps = {
  params: any;
  types: PerformanceType[];
  type: PerformanceType;
  path: any;
}

const ChipButton:React.FC<ChipButtonProps> = ({params, types, type , path}) => {
  const router = useRouter();
  const clickHandler = (): void => {
    const updatedPath = makePath(params, types, type, path)
    router.push(updatedPath)
    router.refresh();
  }
  return (
    <button
          key={type}
          onClick={clickHandler}
          className={`flex justify-center rounded-full border border-grey-100/20 p-[0.5rem] min-w-[5rem] whitespace-nowrap md:hover:bg-grey-100/80 md:hover:text-white-100 transition ease-in-out 
          ${(params.length === 0 || params.includes(type)) && "bg-grey-100/30 "}
          `}
        >
          {(params.length === 0 || params.includes(type)) 
            && <IoCheckmark className='my-auto mr-1'/>}
          {toTitleCase(type)}
        </button>
  )
}

export default ChipButton