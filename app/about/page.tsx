import React from "react";
import Image from "next/image";

const AboutPage = () => {
  return (
    <div className="mx-6 md:mx-16 lg:mx-28 xl:mx-32">
      <h2 className="my-6 p-4 font-bold text-xl uppercase text-center md:text-3xl md:my-16 md:p-10">
        Noriko Yamamoto
      </h2>
      <div className="flex flex-col justify-center md:flex-row">
        <div className="m-auto md:mt-0">
          <Image
            src="/images/about_image.png"
            alt=""
            height={400}
            width={400}
          />
        </div>
        <div className="w-auto mt-10 md:mx-10 md:mt-0 md:w-2/3">
          <p className="text-left text-xl md:text-sxl">
            I’m a dreamer. I love life. I love cats. I’m a mime, dancer and
            visual artist (sculpture & mixed-media). I grew up in Tokyo and now
            live in Toronto.
          </p>
        </div>
      </div>
    </div>
  );
};

export default AboutPage;
