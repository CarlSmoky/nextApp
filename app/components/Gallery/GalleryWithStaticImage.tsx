import ImgContainerWithStaticImage from "./ImgContainerWithStaticImage"
import { visualArtData } from '../../visual-art/VisualArtData'

const GalleryWithStaticImage = async () => {
  if (!visualArtData) return <h2 className="m-4 text-sxl font-bold">No images Found</h2>

  return (
   <ul className="flex flex-col md:flex-row flex-wrap">
      {visualArtData.map((series, i) => (
        <ImgContainerWithStaticImage image={series.images[0]} numberOfImage={series.images.length} title={series.title} key={i} i={i}/>
      ))}
   </ul>
  )
}

export default GalleryWithStaticImage