import React from "react";
import type { Metadata } from 'next'
import ImageAndText from "../components/ImageAndText";
import SectionWrapper from "../components/SectionWrapper";
import ImageWrapper from '../components/ImageWrapper';
import ParagraphWrapper from '../components/ParagraphWrapper';

export const metadata: Metadata = {
  title: 'About',
}

const AboutPage: React.FC = () => {
  return (
      <SectionWrapper title="Noriko Yamamoto!!!" >
        <ImageAndText>
          <ImageWrapper src="/images/about-noriko.jpg"
          alt="portrait"/>
          <ParagraphWrapper paragraph="I’m a dreamer. I love life. I love cats. I’m a mime, dancer and
        visual artist (sculpture & mixed-media). I grew up in Tokyo and now
        live in Toronto."/>
        </ImageAndText>
      </SectionWrapper>
  );
};

export default AboutPage;
