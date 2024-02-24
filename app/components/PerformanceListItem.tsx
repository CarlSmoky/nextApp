import Video from "./Video";
import Details from "./Details";
import { Performance } from "../types/Interfaces";

type PerformanceListItemProps = {
  item: Performance
}

const PerformanceListItem:React.FC<PerformanceListItemProps> = ({item}) => {
  const displayKey = ["type", "event", "location", "date"];
  const titleCaseKeys = ["type", "event", "location", "date"];
  return (
    <li className="flex-wrapper">
      <Video title={item.title} VideoId={item.VideoId}/>
      <Details item={item} displayKey={displayKey} titleCaseKeys={titleCaseKeys}/>
    </li>
  )
}

export default PerformanceListItem