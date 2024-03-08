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
      <h2 className="font-title font-bold text-lg md:text-xl lg:text-2xl">
        {toTitleCase(item.title)}
      </h2>
      {item.subTitle && (
        <h3 className="text-sm font-paragraph">{toTitleCase(item.subTitle)}</h3>
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
