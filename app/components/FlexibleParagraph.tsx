import React from "react";
import { childrenProps } from "../types/Interfaces";


const FlexibleParagraph: React.FC<childrenProps> = ({ children }: childrenProps)  => {
  return (
    <div className="w-auto mt-10 md:mt-0 md:ml-8 md:w-1/2">
        <p className="text-left text-grey-100 text-base md:text-lg lg:text-xl font-paragraph tracking-wide mb-3">
          {children}
        </p>
      </div>
  )
}

export default FlexibleParagraph