import React from "react";
import { childrenProps } from '../types/Interfaces'

const ImageAndText: React.FC<childrenProps> = ({ children }: childrenProps) => {
  return (
    <div className="flex flex-col justify-between md:flex-row">
      {children}
    </div>
  );
};

export default ImageAndText;
