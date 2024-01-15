import React from 'react'
import type { Metadata } from 'next'
import ImageAndText from "../components/ImageAndText";
import SectionWrapper from "../components/SectionWrapper";
import ImageWrapper from '../components/ImageWrapper';
import ParagraphWrapper from '../components/ParagraphWrapper';

export const metadata: Metadata = {
  title: 'Nia instruction',
}

const paragraph =`Nia blends modern and ethnic dance with elements of martial arts, tai chi, and yoga to give a low impact, full ‘mind, body and spirit’ workout. It’s fun and invigorating. No dance experience necessary. You need only enjoy moving to music......barefooted!!! Noriko has been a certified Nia Instructor since 2000, and since the beginning of the pandemic, she’s shifted her classes to just one online Zoom class on Thursday mornings at 9:15am EST. You're welcome to join any time – just email Noriko for more details.`

const NiaInstructionPage: React.FC = () => {
  return (
    <SectionWrapper title="Nia Instruction">
      <ImageAndText>
          <ImageWrapper src="/images/nia-instruction.jpg"
          alt="nia-photo"/>
          <ParagraphWrapper paragraph={paragraph}/>
        </ImageAndText>
    </SectionWrapper>
  )
}

export default NiaInstructionPage