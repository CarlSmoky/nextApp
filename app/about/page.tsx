import React from "react";
import type { Metadata } from "next";
import ImageAndText from "../components/ImageAndText";
import SectionWrapper from "../components/SectionWrapper";
import ImageWrapper from "../components/ImageWrapper";
import LongParagraphWrapper from "../components/LongParagraphWrapper";

export const metadata: Metadata = {
  title: 'About Noriko Yamamoto',
}

const paragraph = `\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0loves ...
cats\u00A0\u00A0cello\u00A0\u00A0skywatching\u00A0\u00A0crescent moons
Charlie Chaplin\u00A0\u00A0Jean-Louis Barrault
Alberto Giacometti\u00A0\u00A0Isamu Noguchi

After a long successful performance career in Tokyo, Noriko Yamamoto moved to Toronto in 1994 to be with her husband. She initially came with two suitcases, her son, cat, and rice cooker. (the gallery is named after this cat)

She has continued this career in Toronto with hundreds of performances at venues ranging from schools and libraries to festivals, galleries, and theatres.

Noriko’s visual art life has been greatly influenced by her performance career as a dancer, mime, clown, Silent Storyteller, and choreographer in both Japan and Canada. A great part of her visual art expresses movement, often shown through nature or the human figure. She subtly uses lines, layers, shadows, and colour to create texture-rich sculptures and mixed-media works. She strives to evoke motion and emotion in stillness.

In 2019 at the Promise of Sekishu Washi exhibition at Propeller Art Gallery in Toronto, her piece, Sora, received an Honourable Mention from the judges and won the Audience Choice Award. It was at this point that she joined the collective, Washi Sisters, and since then, has been enjoying the challenge of using traditional Japanese handmade paper in her artworks.`

const AboutPage: React.FC = () => {
  return (
    <SectionWrapper title="Noriko Yamamoto">
      <ImageAndText>
        <ImageWrapper src="/images/noriko.jpg" alt="portrait" />
        <LongParagraphWrapper paragraph={paragraph}/>
      </ImageAndText>
    </SectionWrapper>
  );
};

export default AboutPage;
