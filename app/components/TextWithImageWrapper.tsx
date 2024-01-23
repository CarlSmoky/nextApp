import React from "react";
import { childrenProps } from "../types/Interfaces";


const TextWithImageWrapper: React.FC<childrenProps> = ({ children }: childrenProps) => {
  return (
    <div className="w-auto mt-10 md:mx-10 md:mt-0 md:w-2/3">
      {children}
    </div>
  )
}

export default TextWithImageWrapper