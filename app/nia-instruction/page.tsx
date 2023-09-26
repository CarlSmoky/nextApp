import React from 'react'
import SectionTitle from "../components/SectionTitle";
import ImageAndText from "../components/ImageAndText";
import SectionWrapper from "../components/SectionWrapper";

const NiaInstructionPage: React.FC = () => {
  return (
    <SectionWrapper title="Nia Instruction">
      <ImageAndText
        src="/images/nia-photo.jpg"
        alt="nia-photo"
        paragraph="Nia blends modern & ethnic dance with elements of martial arts, tai chi & yoga to give a low impact, full ‘mind, body & spirit’ workout.
        It’s fun & invigorating. No dance experience necessary. You need only enjoy moving to music…barefooted!!!
        Noriko has been a certified Nia Instructor since 2000 and normally runs two 75 minute-classes a week in Toronto. One is at the Japanese Canadian Cultural Centre >> 6 Garamond Ct. on Wednesday at 6:15pm; the other is at momo gallery >> 692 St. Clarens Avenue, Studio 8 on Thursdays at 10:15am."
      />
    </SectionWrapper>
  )
}

export default NiaInstructionPage