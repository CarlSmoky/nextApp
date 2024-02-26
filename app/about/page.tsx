import React from "react";
import type { Metadata } from "next";
import SectionwithTitle from "../components/SectionwithTitle";
import PortraitImage from "../components/PortraitImage";
import TextWithlineClampButton from "../components/TextWithlineClampButton";
import Compliment from "../components/Compliment";

export const metadata: Metadata = {
  title: "About Noriko Yamamoto",
};

const spaces = {
  long: `\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0`,
  betweenWords: `\xa0\xa0\xa0\xa0`,
}

const AboutPage: React.FC = () => {
  return (
    <SectionwithTitle title="Noriko Yamamoto">
      <div className="flex-wrapper">
        <PortraitImage src="/images/noriko.jpg" alt="portrait" />
        <Compliment widthRatio="twoThird">

          <div className="italic text-sm md:text-base lg:text-lg pt-6 md:pt-0">
            <p>
              {spaces.long}loves
              ...
            </p>
            <p className="whitespace-nowrap">
              cats{spaces.betweenWords}cello{spaces.betweenWords}skywatching{spaces.betweenWords}crescent
              moons
            </p>
            <p className="whitespace-nowrap">
              Charlie Chaplin{spaces.betweenWords}Jean-Louis Barrault
            </p>
            <p className="whitespace-nowrap">
              Alberto Giacometti{spaces.betweenWords}Isamu Noguchi
            </p>
          </div>
          <TextWithlineClampButton>
            <br />
            After a long successful performance career in Tokyo, Noriko Yamamoto moved to Toronto in 1994 to be with her husband. She initially came with two suitcases, her son, cat, and rice cooker. <span className="italic text-sm md:text-base lg:text-lg">(the gallery is named after this special cat)</span>
            <br />
            <br />
            She has continued this career in Toronto with hundreds of performances at venues ranging from schools and libraries to festivals, galleries, and theatres.
            <br />
            <br />
            Noriko’s visual art life has been greatly influenced by her performance career as a dancer, mime, clown, Silent Storyteller, and choreographer in both Japan and Canada. A great part of her visual art expresses movement, often shown through nature or the human figure. She subtly uses lines, layers, shadows, and colour to create texture-rich sculptures and mixed-media works. She strives to evoke motion and emotion in stillness.
            <br />
            <br />
            In 2019 at the Promise of Sekishu Washi exhibition at Propeller Art Gallery in Toronto, her piece, Sora, received an Honourable Mention from the judges and won the Audience Choice Award. It was at this point that she joined the collective, Washi Sisters, and since then, has been enjoying the challenge of using traditional Japanese handmade paper in her artworks.
            <br />
            <br />
          </TextWithlineClampButton>
        </Compliment>
      </div>
    </SectionwithTitle>
  );
};

export default AboutPage;
