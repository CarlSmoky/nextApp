import VisualArtListItem from "./VisualArtListItem";
import { VisualArtSeries, VisualArtImage } from "../types/Interfaces"

type VisualArtListProps = {
  item: VisualArtSeries
}

const VisualArtList: React.FC<VisualArtListProps> = ({item}) => {
  
  const visualArtListItems = item.images.map((imageDetail: VisualArtImage, i: number) => 
    <VisualArtListItem key={i} item={imageDetail} i={i}/>
  )

  return (
    <ul>
    {visualArtListItems}
    </ul>
  )
}

export default VisualArtList