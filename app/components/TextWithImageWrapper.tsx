import React from "react";
import { childrenProps } from "../types/Interfaces";


const TextWithImageWrapper: React.FC<childrenProps> = ({ children }: childrenProps) => {
  return (
    <div className="w-full md:w-2/3 mt-10 md:ml-6 md:mt-0">
      {children}
    </div>
  )
}

export default TextWithImageWrapper