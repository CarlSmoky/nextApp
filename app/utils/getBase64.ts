import fs from "node:fs/promises";
import { getPlaiceholder } from "plaiceholder";
import type { VisualArtImage } from '../types/Interfaces'

const getBase64 = async (src: string) => {
  try {
    const buffer = await fs.readFile(`./public/${src}`);
    const { base64 } = await getPlaiceholder(Buffer.from(buffer))
    return base64
    
  } catch (e) {
    if (e instanceof Error) console.log(e.stack) 
  }
}

const addBlurredDataUrls = async (images: VisualArtImage[]): Promise<VisualArtImage[]> => {
  // Make all requests at once instead of awaiting each one -- avoiding a waterfall
  const base64Promises = images.map(image => getBase64(image.src))

  // Resove all requests in order
  const baes64Results = await Promise.all(base64Promises)

  const photosWithBlur: VisualArtImage[] = images.map((photo, i) => {
    photo.blurredDataUrl = baes64Results[i]
    return photo
  })
  return photosWithBlur
}

export default addBlurredDataUrls;