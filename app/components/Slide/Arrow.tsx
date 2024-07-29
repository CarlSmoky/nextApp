import {
  BsFillArrowLeftCircleFill,
  BsFillArrowRightCircleFill,
} from "react-icons/bs";
import { GrFormPrevious, GrFormNext } from "react-icons/gr";

type ArrowProps = {
  direction: string;
  onClick: () => void;
};

const Arrow: React.FC<ArrowProps> = ({ direction, onClick }) => (
  <button
    aria-label={direction === "left" ? "previous slide image" : "next slide image"}
    className="absolute top-[50%] translate-x-0 translate-y-[-50%] text-2xl rounded-full text-white-100 cursor-pointer"
    style={{ [direction]: "1px" }}
    onClick={onClick}
  >
    {direction === "left" ? <GrFormPrevious  size={25} /> : <GrFormNext size={25} />}
  </button>
);
export default Arrow;
