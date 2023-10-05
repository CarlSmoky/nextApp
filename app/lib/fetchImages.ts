import type { ImageResults } from "../models/images"
import { ImagesSchemaWithPhotos } from "../models/images"
import env from "./env"

export default async function fetchImages(url: string):
Promise<ImageResults | undefined> {
  try {
    const res = await fetch(url, {
      headers: {
        Authorization: env.PEXELS_API_KEY
      }
    })
    if (!res.ok) throw new Error("Fetch Images error!\n")

    const ImageResults: ImageResults = await res.json()

    // Parse data with Zod schema
    const parsedData = ImagesSchemaWithPhotos.parse(ImageResults)

    if(parsedData.total_results === 0) return undefined

    return parsedData
    
  } catch (e) {
    if (e instanceof Error) console.log(e.stack);
    
  }
}