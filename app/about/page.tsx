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
      <SectionWrapper title="Noriko Yamamoto" >
        <ImageAndText>
          <ImageWrapper src="/images/noriko.jpg"
          alt="portrait"/>
          <ParagraphWrapper paragraph="Noriko Yamamoto’s visual art life has been greatly influenced by her performance career as a
        dancer, mime, clown, choreographer, and Silent Storyteller.
        A great part of her visual art expresses movement, often shown through nature or the human body.
        She subtly uses lines, layers, shadows, and colour to create texture-rich sculptures and mixed-media
        works. She strives to evoke motion and emotion in stillness.
        In 2019 at the Promise of Sekishu Washi exhibition at Propeller Gallery, Noriko's piece, Sora,
        received an Honourable Mention from the judges and won the Audience Choice Award. It was at
        this point that Noriko joined the collective, Washi Sisters."/>
        </ImageAndText>
      </SectionWrapper>
  );
};

export default AboutPage;
