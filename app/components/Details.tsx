import { toTitleCase, formatForKey } from "../utils/textFormat";
import { Performance, VisualArtImage } from "../types/Interfaces";

type DetailsProps = {
  item: Performance | VisualArtImage;
  displayKey: string[];
  titleCaseKeys: string[];
};

const Details: React.FC<DetailsProps> = ({ item, displayKey, titleCaseKeys }) => {
  return (
    <div className="w-auto mt-4 mb-10 md:mt-0 md:ml-8 md:w-1/2 text-left text-grey-100  tracking-wide">
      <h3 className="font-title font-bold text-lg md:text-xl lg:text-2xl">
        {toTitleCase(item.title)}
      </h3>
      {item.subTitle && (
        <h4 className="text-sm font-paragraph">{toTitleCase(item.subTitle)}</h4>
      )}
      <div className="text-base lg:text-lg font-paragraph">
        {displayKey.map((key, i) =>
            (item as any)[key] && (
              <p key={i}>
                <span className="text-sm">{toTitleCase(key)}: </span>
                {formatForKey(key, (item as any)[key], titleCaseKeys)}
              </p>
            )
        )}
      </div>
    </div>
  );
};

export default Details;
