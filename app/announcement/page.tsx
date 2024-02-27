import type { Metadata } from "next";
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
          VideoId="1ggLRXBEy8Y"
          title="Mime-Dance by Noriko Yamamoto: Fading Memories"
        />
        <TextInfoWrapper breakePointWidth="half">
          <p className="py-4 md:pt-0">
          March 8 - 13, 2024: Fading Memories art exhibition + performance in Tokyo, Japan.
          </p>
          <BorderlineButton
            url="https://norikoyamamoto.themedia.jp/posts/50633765?categoryIds=618885"
            text="More Information (Japanese)"
          >
            <IoIosInformationCircleOutline size={20} className="m-2" />
          </BorderlineButton>
          <BorderlineButton
            url="https://docs.google.com/forms/d/e/1FAIpQLScJ6ctBBgKpjJf4qX3Eg-13dqZi7AX3D1ejaVgBzcT7fZ-Hng/viewform?vc=0&c=0&w=1&flr=0"
            text="Reserve Ticket (Japanese)"
          >
            <IoTicketOutline size={20} className="m-2" />
          </BorderlineButton>
        </TextInfoWrapper>
      </div>
    </SectionwithTitle>
  );
};

export default AnnouncementPage;
