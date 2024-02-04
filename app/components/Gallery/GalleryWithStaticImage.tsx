import React from "react"
import ImgContainerWithStaticImage from "./ImgContainerWithStaticImage"
import { visualArtData } from '../../visual-art/VisualArtData'
// import addBlurredDataUrls from '../../lib/getBase64'


const GalleryWithStaticImage = async () => {
  if (!visualArtData) return <h2 className="m-4 text-sxl font-bold">No images Found</h2>
  // const photosWithBlur = await addBlurredDataUrls(images)

  return (
   <section className="flex flex-col md:flex-row flex-wrap">
    
      {visualArtData.map(series => (
        <ImgContainerWithStaticImage image={series.images[0]} numberOfImage={series.images.length} title={series.title} key={series.id}/>
      ))}
    
   </section>
  )
}

export default GalleryWithStaticImage