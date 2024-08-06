import React from "react";

type ComplimentProps = {
  children: React.ReactNode;
  breakePointWidth?: "half" | "twoThirds";
}

const TextInfoWrapper: React.FC<ComplimentProps> = ({ children, breakePointWidth }) => {
  return (
    <article className={`w-full ${breakePointWidth === "half" ? "md:w-1/2" : "md:w-2/3"} mt-4 md:mt-0 md:ml-8 text-left text-grey-100 text-base md:text-lg lg:text-xl font-paragraph tracking-wide`}>
      {children}
    </article>
  )
}

export default TextInfoWrapper