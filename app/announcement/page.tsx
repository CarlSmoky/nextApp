import React from 'react'
import SectionWrapper from "../components/SectionWrapper";
import ImageAndText from "../components/ImageAndText";
import ImageWrapper from '../components/ImageWrapper';
import ParagraphWrapper from '../components/ParagraphWrapper';

const AnnouncementPage: React.FC = () => {
  return (
    <SectionWrapper title="Announcement">
        <ImageAndText>
          <ImageWrapper src="/images/about_image.png"
          alt="portrait"/>
          <ParagraphWrapper paragraph="Lorem ipsum, dolor sit amet consectetur adipisicing elit. Accusamus dicta, natus adipisci cupiditate accusantium consequuntur voluptas nisi perspiciatis rem alias animi error sapiente tenetur voluptates doloribus. Inventore sit quam non?"/>
        </ImageAndText>
    </SectionWrapper>
  )
}

export default AnnouncementPage