import SquareImage from "./SquareImage";
import Details from "./Details";
import { VisualArtImage } from "../types/Interfaces"

type VisualArtListItemProps = {
  item: VisualArtImage,
  i: number
}

const VisualArtListItem:React.FC<VisualArtListItemProps> = ({item, i}) => {
  const displayKey = ["media", "size", "year"];
  const titleCaseKeys = ["media"]
  return (
    <li className="flex-wrapper">
      <SquareImage src={item.src} alt={item.title} i={i}/>
      <Details item={item} displayKey={displayKey} titleCaseKeys={titleCaseKeys}/>
    </li>
  )
}

export default VisualArtListItem