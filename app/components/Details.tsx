import { toTitleCase, formatForKey } from "../utils/textFormat";
import { Performance, VisualArtImage } from "../types/Interfaces";
import TextInfoWrapper from "./TextInfoWrapper"

type DetailsProps = {
  item: Performance | VisualArtImage;
  displayKey: string[];
  titleCaseKeys: string[];
};

const Details: React.FC<DetailsProps> = ({ item, displayKey, titleCaseKeys }) => {
  return (
    <TextInfoWrapper breakePointWidth="half">
      <h3 className="font-title font-bold text-lg md:text-xl lg:text-2xl">
        {toTitleCase(item.title)}
      </h3>
      {item.subTitle && (
        <h4 className="text-sm font-paragraph">{toTitleCase(item.subTitle)}</h4>
      )}
      <ul className="text-base lg:text-lg font-paragraph">
        {displayKey.map((key, i) =>
            (item as any)[key] && (
              <li key={i}>
                <span className="text-sm">{toTitleCase(key)}: </span>
                {formatForKey(key, (item as any)[key], titleCaseKeys)}
              </li>
            )
        )}
      </ul>
    </TextInfoWrapper>
  );
};

export default Details;
