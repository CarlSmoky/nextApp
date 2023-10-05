import React from 'react'
import ImgContainer from "./ImgContainer"
import fetchImages from "../lib/fetchImages"
import type { ImageResults } from "../models/images"
import addBlurredDataUrls from '../lib/getBase64'
// import { images } from '../types/Interfaces'

type Props = {
  topic?: string | undefined
}

const Gallery = async ({ topic }: Props) => {

  const url = !topic ? 'https://api.pexels.com/v1/curated' : `https://api.pexels.com/v1/search?query=${topic}`

  const images: ImageResults | undefined = await fetchImages(url)
  if (!images) return <h2 className="m-4 text-sxl font-bold">No images Found</h2>

  const photosWithBlur = await addBlurredDataUrls(images)
  return (
   <section className="px-2 my-3 grid gap-2 grid-cols-gallery">
  {/* <section className="px-1 my-3 grid grid-cols-gallery auto-rows-[10px]"> */}
    
      {photosWithBlur.map(photo => (
        <ImgContainer photo={photo} key={photo.id}/>
      ))}
    
   </section>
  )
}

export default Gallery