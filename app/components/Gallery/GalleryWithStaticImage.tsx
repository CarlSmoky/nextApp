import React from 'react'
import ImgContainerWithStaticImage from "./ImgContainerWithStaticImage"
import { images } from '../../types/Interfaces'
import addBlurredDataUrls from '../../lib/getBase64'


const GalleryWithStaticImage = async () => {
  if (!images) return <h2 className="m-4 text-sxl font-bold">No images Found</h2>
  // const photosWithBlur = await addBlurredDataUrls(images)

  return (
   <section className="px-2 my-3 grid gap-2 grid-cols-gallery">
    
      {images.map(photo => (
        <ImgContainerWithStaticImage photo={photo} key={photo.id}/>
      ))}
    
   </section>
  )
}

export default GalleryWithStaticImage