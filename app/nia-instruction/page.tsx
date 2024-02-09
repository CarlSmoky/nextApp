import React from "react";
import type { Metadata } from "next";
import ImageAndText from "../components/ImageAndText";
import SectionWrapper from "../components/SectionWrapper";
import VideoWrapper from "../components/VideoWrapper";
import TextWithVideoWrapper from "../components/TextWithVideoWrapper"

export const metadata: Metadata = {
  title: "Nia instruction",
};

const NiaInstructionPage: React.FC = () => {
  return (
    <SectionWrapper title="Nia Instruction">
      <ImageAndText>
        <VideoWrapper
          src="fLJ0Piaqk3Y"
          title="Nia Instruction"
        />
        <TextWithVideoWrapper>
          <p>
          Nia blends modern and ethnic dance with elements of martial arts, tai
          chi, and yoga to give a low impact, full&nbsp;
          <span className="italic">
            ‘mind, body and spirit’
          </span>
          &nbsp;workout. It’s fun and invigorating. No dance experience necessary. You need only enjoy moving to music ..... barefooted!!! Noriko has been a certified Nia Instructor since 2000, and since the beginning of the pandemic, she’s shifted her classes to just one online Zoom class on Thursday mornings at 9:15am EST. You&apos;re welcome to join any time – just email Noriko for more details.
          </p>
        </TextWithVideoWrapper>
      </ImageAndText>
    </SectionWrapper>
  );
};

export default NiaInstructionPage;
