import { toTitleCase } from "../utils/textFormat";
import { PerformanceType } from "../types/Interfaces";


type ChipButtonProps = {
  type?: PerformanceType;
  text?: string;
  isSelected?: boolean;
  selectedAll?: boolean;
  clickHandler: () => void;
}

const ChipButton:React.FC<ChipButtonProps> = ({type, text, isSelected, selectedAll = false, clickHandler}) => {
  
  return (
    <button
          onClick={clickHandler}
          className={`flex justify-center rounded-full border border-grey-100/20 p-[0.5rem] min-w-[5rem] whitespace-nowrap md:hover:bg-grey-100/80 md:hover:text-white-100 transition ease-in-out 
          ${isSelected && "bg-grey-100/30 "}
          ${selectedAll && "outline outline-offset-2 outline-2 outline-grey-100/50"}
          `}
          disabled={selectedAll}
        >

          {type ? toTitleCase(type) : text}
        </button>
  )
}

export default ChipButton