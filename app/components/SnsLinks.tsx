import Link from "next/link";
import DynamicLcon from "./DynamicIcon";
import { SnsList } from "../data/SnsList";

type SnsLinksProps = {
  clickHandler?: () => void;
}

const SnsLinks:React.FC<SnsLinksProps> = ({ clickHandler }) => {
  return (
    <>
      {SnsList.map(
            (item, i) => (
              <li key={i} className="p-3 m-2 lg:p-2 lg:m-1 inline-block text-sm hover:text-black-100 transition-all duration-300 ease-in-out" onClick={clickHandler}>
                <Link href={item.href} target="_blank" className="g-sns-link">
                  <DynamicLcon iconName={item.iconName} size={20}/>
                  <span className="sr-only">{item.iconName}</span>
                </Link>
              </li>
            )
          )}
    </>
  );
};

export default SnsLinks;
