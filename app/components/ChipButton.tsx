import Link from "next/link";
import { toTitleCase } from "../utils/textFormat";
import { PerformanceType } from "../types/Interfaces";

type ChipButtonProps = {
  href: string;
  type?: PerformanceType | null;
  selectedType: boolean;
  selectedAll: boolean;
  disabled: boolean;
};

const ChipButton: React.FC<ChipButtonProps> = ({
  href,
  type,
  selectedType = false,
  selectedAll = false,
  disabled = false
}) => {
  return (
    <Link
      href={href}
      prefetch={false}
      className={`flex justify-center rounded-full border border-grey-100/20 p-[0.5rem] min-w-[5rem] whitespace-nowrap md:hover:bg-grey-100/80 md:hover:text-white-100 transition ease-in-out 
          ${selectedType && "bg-grey-100/30"}
          ${disabled && "pointer-events-none"}
          ${selectedAll && "outline outline-offset-2 outline-2 outline-grey-100/50 "}
          `}
    >
      {type ? toTitleCase(type) : "All"}
    </Link>
  );
};

export default ChipButton;
