import React from "react";
import { childrenProps } from '../types/Interfaces'

const ImageAndText: React.FC<childrenProps> = ({ children }: childrenProps) => {
  return (
    <div className="flex flex-col justify-between md:flex-row py-3 md:py-6">
      {children}
    </div>
  );
};

export default ImageAndText;
