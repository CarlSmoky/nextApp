import React from "react";

type ComplimentProps = {
  children: React.ReactNode;
  widthRatio?: "half" | "twoThird";
}


const Compliment: React.FC<ComplimentProps> = ({ children, widthRatio }) => {

  return (
    <div className={`w-full ${widthRatio === "half" ? "md:w-1/2" : "md:w-2/3"} mt-4 md:mt-0 md:ml-8 text-left text-grey-100 text-base md:text-lg lg:text-xl font-paragraph tracking-wide`}>
      {children}
    </div>
  )
}

export default Compliment