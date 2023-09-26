import React from 'react'
import SectionWrapper from "../components/SectionWrapper";
import SectionTitle from "../components/SectionTitle";
import ImageAndText from "../components/ImageAndText";

const AnnouncementPage: React.FC = () => {
  return (
    <SectionWrapper title="Announcement">
        <ImageAndText
          src="/images/about_image.png"
          alt="portrait"
          paragraph="Lorem ipsum, dolor sit amet consectetur adipisicing elit. Accusamus dicta, natus adipisci cupiditate accusantium consequuntur voluptas nisi perspiciatis rem alias animi error sapiente tenetur voluptates doloribus. Inventore sit quam non?"
        />
    </SectionWrapper>
  )
}

export default AnnouncementPage