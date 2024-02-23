import React from "react";
import { childrenProps } from "../types/Interfaces";


const Text: React.FC<childrenProps> = ({ children }: childrenProps) => {
  return (
    <div className="w-auto md:w-1/2 mt-10 md:mt-0 md:ml-8 mb-3 text-left text-grey-100 text-base md:text-lg lg:text-xl font-paragraph tracking-wide">
      {children}
    </div>
  )
}

export default Text