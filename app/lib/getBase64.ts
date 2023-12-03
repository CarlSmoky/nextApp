import { getPlaiceholder } from "plaiceholder";
import type { PhotoSchema } from '../types/Interfaces'
import type { Photo, ImageResults } from '../types/Images'


const getBase64 = async (imageUrl: string) => {
  try {
    const res = await fetch(imageUrl)

    if (!res.ok) {
      throw new Error(`Failed to fetch image:${res.status} ${res.statusText}`)
    }

    const buffer = await res.arrayBuffer()

    const { base64 } = await getPlaiceholder(Buffer.from(buffer))
    return base64
    
  } catch (e) {
    if (e instanceof Error) console.log(e.stack) 
  }
}

const addBlurredDataUrls = async (images: ImageResults): Promise<Photo[]> => {
  // Make all requests at once instead of awaiting each one -- avoiding a waterfall

  const base64Promises = images.photos.map(photo => getBase64(photo.src.large))

  // Resove all requests in order
  const baes64Results = await Promise.all(base64Promises)

  const photosWithBlur: Photo[] = images.photos.map((photo, i) => {
    photo.blurredDataUrl = baes64Results[i]
    return photo
  })
  return photosWithBlur
}

export default addBlurredDataUrls;