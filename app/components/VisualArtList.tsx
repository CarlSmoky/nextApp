import VisualArtListItem from "./VisualArtListItem";
import { VisualArtSeries, VisualArtImage } from "../types/Interfaces"
import addBlurredDataUrls from "../utils/getBase64";

type VisualArtListProps = {
  item: VisualArtSeries
}

const VisualArtList: React.FC<VisualArtListProps> = async ({item}) => {
  const photosWithBlur = await addBlurredDataUrls(item.images);
  
  const visualArtListItems = photosWithBlur.map((imageDetail: VisualArtImage, i: number) => 
    <VisualArtListItem key={i} item={imageDetail} i={i}/>
  )

  return (
    <ul>
    {visualArtListItems}
    </ul>
  )
}

export default VisualArtList