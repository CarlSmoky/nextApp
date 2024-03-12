import ImgContainerWithStaticImage from "./ImgContainerWithStaticImage";
import { visualArtData } from "../../visual-art/VisualArtData";
import { VisualArtSeries } from "../../types/Interfaces";
import { getBase64 } from "../../utils/getBase64";

const GalleryWithStaticImage: React.FC = async () => {
  if (!visualArtData)
    return <h2 className="m-4 text-sxl font-bold">No images Found</h2>;

  let data: VisualArtSeries[]  = [...visualArtData];
  for (let i = 0; i < data.length; i++) {
    const base64 = await getBase64(data[i].images[0].src);
    data[i].images[0].blurredDataUrl = base64;
  }

  return (
    <ul className="flex flex-col md:flex-row flex-wrap">
      {data.map((series) => (
          <ImgContainerWithStaticImage
            image={series.images[0]}
            numberOfImage={series.images.length}
            title={series.title}
            key={series.title}
        />
      ))}
    </ul>
  );
};

export default GalleryWithStaticImage;
