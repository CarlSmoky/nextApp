import React from 'react'
import Image from "next/image";

const AboutContents = () => {
  return (
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
  )
}

export default AboutContents