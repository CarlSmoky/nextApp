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
          className={`flex justify-center rounded-full border border-grey-100/20 px-[0.5rem] py-[0.1rem] min-w-[3rem] whitespace-nowrap hover:bg-grey-100/20 transition ease-in-out 
          ${(params.length === 0 || params.includes(type)) && "bg-grey-100/80 text-white-100"}
          `}
        >
          {(params.length === 0 || params.includes(type)) 
            && <IoCheckmark className='my-auto mr-1'/>}
          {toTitleCase(type)}
        </button>
  )
}

export default ChipButton