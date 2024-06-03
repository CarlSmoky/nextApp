import type { Metadata } from "next";
import Link from "next/link";
import SectionwithTitle from "../components/SectionwithTitle";
import Video from "../components/Video";
import TextInfoWrapper from "../components/TextInfoWrapper";
import BorderlineButton from "../components/BorderlineButton";
import { IoTicketOutline } from "react-icons/io5";
import { IoIosInformationCircleOutline } from "react-icons/io";

export const metadata: Metadata = {
  title: "Anouncement",
};

const AnnouncementPage: React.FC = () => {
  return (
    <SectionwithTitle title="Announcement">
      <div className="flex-wrapper">
        <Video
          VideoId="ol6DkXRV1G8"
          title="What Luck! (Ryōkan Taigu) - Luka Kuplowsky & The Ryōkan Band"
        />
        <TextInfoWrapper breakePointWidth="half">
          <div className="py-4 md:pt-0">
            <h2 className="font-bold text-lg lg:text-xl pb-2">
              Dancing in Music Video, and Live Show on June 18!
            </h2>
            <p className="text-base lg:text-lg py-2">
              Luka Kuplowsky & The Ryōkan Band released their new album{" "}
              <Link
                href="https://lukalives.bandcamp.com/album/how-can-i-possibly-sleep-when-there-is-music"
                target="_blank"
              >
                <span className="italic no-underline hover:underline decoration-grey-100/50 decoration-1 underline-offset-4">
                  How Can I Possibly Sleep When There is Music.
                </span>
              </Link>{" "}
              I am dancing in one of the song&apos;s videos & I will be dancing
              live to four of the songs at the show.
            </p>
            <ul className="text-base lg:text-lg">
              <li>
                <span className="text-sm">Venue: </span>
                Tranzac Club (Main Hall)
              </li>
              <li>
                <span className="text-sm">Date: </span>June 18, 2024
              </li>
              <li>
                <span className="text-sm">Time: </span>7:00pm - 11:00pm
              </li>
              <li>
                <span className="text-sm">Address: </span>
                <Link
                  href="https://maps.app.goo.gl/wrh41uJTi6Qff58m7"
                  target="_blank"
                  className="no-underline hover:underline decoration-grey-100/50 decoration-1 underline-offset-4"
                >
                  292 Brunswick Ave Toronto, ON
                </Link>
              </li>
            </ul>
            <span className="text-xs lg:text-sm">
              Note: The concert starts at 7pm, but Luka&apos;s band will be on
              from 9pm.
            </span>
          </div>
          <BorderlineButton
            url="https://www.tranzac.org/event/luka-kuplowsky-the-ryokan-band-album-release-w-the-heart-of-going-la/"
            text="More Information"
          >
            <IoIosInformationCircleOutline size={20} className="m-2" />
          </BorderlineButton>
          <BorderlineButton
            url="https://www.eventbrite.ca/e/luka-kuplowsky-the-ryokan-band-album-release-w-the-heart-of-going-la-tickets-885287086507"
            text="Reserve Ticket"
          >
            <IoTicketOutline size={20} className="m-2" />
          </BorderlineButton>
        </TextInfoWrapper>
      </div>
    </SectionwithTitle>
  );
};

export default AnnouncementPage;
