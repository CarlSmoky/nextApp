import React from "react";
import { childrenProps } from "../types/Interfaces";

const ItalicWrapper: React.FC<childrenProps> = ({ children }: childrenProps) => {
  return (
    <div className="text-left italic text-grey-100 text-sm md:text-base lg:text-lg font-paragraph tracking-wide">
      {children}
    </div>
  )
}

export default ItalicWrapper