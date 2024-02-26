import React from "react";
import { childrenProps } from "../types/Interfaces";


const Text: React.FC<childrenProps> = ({ children }: childrenProps) => {
  return (
    <div className="w-full md:w-1/2 mt-4 md:mt-0 md:ml-8 text-left text-grey-100 text-base md:text-lg lg:text-xl font-paragraph tracking-wide">
      {children}
    </div>
  )
}

export default Text