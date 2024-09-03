import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import SectionwithTitle from "../components/SectionwithTitle";
import TextInfoWrapper from "../components/TextInfoWrapper";
import BorderlineButton from "../components/BorderlineButton";
import { IoTicketOutline } from "react-icons/io5";
import { IoIosInformationCircleOutline } from "react-icons/io";

export const metadata: Metadata = {
  title: "Anouncement",
};

const AnnouncementPage: React.FC = () => {
  return (
    <SectionwithTitle title="Announcement" isPageHeading={false}>
      <div className="flex-wrapper">
        <Image
          src="/images/announcement/Opening_Reception_Spirit_Place_JCCC.jpeg"
          alt="Spirit Place Opening Reception Flyer"
          width={300}
          height={300}
          className={`w-2/3 sm:w-1/2 md:w-1/3 object-cover mx-auto md:mx-0`}
          sizes="(max-width: 768px) 100vw, (max-width: 976px) 50vw, 33vw"
        />
        <TextInfoWrapper breakePointWidth="twoThirds">
          <div className="py-4 md:pt-0">
            <h3 className="font-bold text-lg lg:text-xl pb-2">
              Mime dance performance at JCCC Gallery on September 25!
            </h3>
            <p className="text-base lg:text-lg py-2">
              I will be performing mime dance at the opening reception of {" "}
              <Link
                href="https://jccc.on.ca/event/2024/09/spirit-place-magnificent-woodcut-art-naoko-matsubara"
                target="_blank"
                className="g-external-link"
              >
                <span className="italic no-underline hover:underline decoration-grey-100/50 decoration-1 underline-offset-4">
                  Spirit Place: The Magnificent Woodcut Art of Naoko
                  Matsubara.
                </span>
              </Link>{" "}
              Please join us for a night of art, film,
              and dance!
            </p>
            <ul className="text-base lg:text-lg">
              <li>
                <span className="text-sm">Date: </span>September 25, 2024
              </li>
              <li>
                <span className="text-sm">Time: </span>7:00pm - 9:30pm
              </li>
              <li>
                <span className="text-sm">Venue: </span>
                Japanese Canadian Cultural Centre Gallery
              </li>
              <li>
                <span className="text-sm">Address: </span>
                <Link
                  href="https://maps.app.goo.gl/qpL9z86fgKKsQLcH6"
                  target="_blank"
                  className="no-underline hover:underline decoration-grey-100/50 decoration-1 underline-offset-4 g-external-link"
                >
                  6 Sakura Way Toronto, ON
                </Link>
              </li>
            </ul>
            <span className="text-xs lg:text-sm">
              Note: Mime dance performance will start at 8:30pm.
            </span>
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
