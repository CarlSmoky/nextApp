import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { getPlaiceholder } from "plaiceholder";
import fs from "node:fs/promises";
import SectionwithTitle from "../components/SectionwithTitle";
import TextInfoWrapper from "../components/TextInfoWrapper";
import BorderlineButton from "../components/BorderlineButton";
import { IoIosInformationCircleOutline } from "react-icons/io";

export const metadata: Metadata = {
  title: "Anouncement",
};

const AnnouncementPage: React.FC = async () => {
  const buffer = await fs.readFile(`./public/images/announcement/Opening_Reception_Spirit_Place_JCCC.jpeg`);
  const { base64 } = await getPlaiceholder(buffer);
  return (
    <SectionwithTitle title="Announcement" isPageHeading={false}>
      <div className="flex-wrapper">
        <div className="w-2/3 sm:w-1/2 md:w-1/3 mx-auto md:mx-0">
          <Image
            src="/images/announcement/Opening_Reception_Spirit_Place_JCCC.jpeg"
            alt="Spirit Place Opening Reception"
            width={600}
            height={800}
            className={`relative object-contain`}
            sizes="(max-width: 480px) 66vw, (max-width: 768px) 50vw, 33vw"
            placeholder="blur"
            blurDataURL={base64}
          />
        </div>
        <TextInfoWrapper breakePointWidth="twoThirds">
          <div className="py-4 md:pt-0">
            <h3 className="font-bold text-lg lg:text-xl pb-2">
              Mime-Dance performance at the JCCC on September 25!
            </h3>
            <p className="text-base lg:text-lg py-2">
              Noriko will be doing a Mime-Dance performance at the opening
              reception of{" "}
              <Link
                href="https://jccc.on.ca/event/2024/09/spirit-place-magnificent-woodcut-art-naoko-matsubara"
                target="_blank"
                className="g-external-link"
              >
                <span className="italic no-underline hover:underline decoration-grey-100/50 decoration-1 underline-offset-4">
                  Naoko Matsubara&apos;s art exhibition.
                </span>
              </Link>{" "}
              Attend the reception for a night of art, film, and dance.
            </p>
            <ul className="text-base lg:text-lg">
              <li>
                <span className="text-sm font-bold">Date: </span>Wednesday
                September 25th, 2024
              </li>
              <li>
                <span className="text-sm font-bold">Time: </span>7:00 - 9:30pm
              </li>
              <li>
                <span className="text-sm font-bold">Venue: </span>
                <Link
                  href="https://maps.app.goo.gl/qpL9z86fgKKsQLcH6"
                  target="_blank"
                  className="no-underline hover:underline decoration-grey-100/50 decoration-1 underline-offset-4 g-external-link"
                >
                  Japanese Canadian Cultural Centre, 6 Sakura Way, Toronto ON
                </Link>
              </li>
              <li>
                <span className="text-sm font-bold">Reception schedule: </span>
                <ul>
                  <li>6:45 pm: Doors Open to Kobayashi Hall</li>
                  <li>
                    7:00 pm: Premiere of film and Naoko Matsubara in
                    conversation with Bruce Kuwabara in Kobayashi Hall
                  </li>
                  <li>7:45 pm: Exhibition opening, remarks in JCCC Gallery</li>
                  <li>
                    8:30 pm: Mime-Dance performance by Noriko Yamamoto in JCCC
                    Gallery
                  </li>
                </ul>
              </li>
            </ul>
          </div>
          <div className="my-auto">
            <BorderlineButton
              url="https://jccc.on.ca/event/2024/09/opening-reception-spirit-place-magnificent-woodcut-art-naoko-matsubara"
              text="More Information About Event"
            >
              <IoIosInformationCircleOutline size={20} className="m-2" />
            </BorderlineButton>
          </div>
        </TextInfoWrapper>
      </div>
    </SectionwithTitle>
  );
};

export default AnnouncementPage;
