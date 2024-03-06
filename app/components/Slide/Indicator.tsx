import { Dispatch } from "react";
import { RxDotFilled } from "react-icons/rx";

type IndicatorItemProps = {
  jumpSlide: (index: number) => void;
  index: number;
  currentIndex: number;
};

const IndicatorItem: React.FC<IndicatorItemProps> = ({
  jumpSlide,
  index,
  currentIndex,
}) => {
  return (
        <li
          onClick={() => jumpSlide(index)}
          className="z-10 text-2xl cursor-pointer"
        >
          <RxDotFilled
            className={`${
              currentIndex === index ? "text-black-100" : "text-grey-100/50"
            }`}
          />
        </li>
  );
};

export default IndicatorItem;
