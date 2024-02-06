"use client";
import React, { useState } from "react";
import { childrenProps } from "../types/Interfaces";
import UnderlineButton from "./UnderlineButton";

const LongTextWithButtonWrapper: React.FC<childrenProps> = ({ children }: childrenProps) => {
  const [open, setOpen] = useState<boolean>(false);

  const handleToggle = () => {
    setOpen(!open);
  };
  return (
    <div>
      <p
        className={`${
          open ? "line-clamp-none" : "line-clamp-10"
        } text-left text-grey-100 text-base md:text-lg lg:text-xl font-paragraph tracking-wide`}
      >
        {children}
      </p>
      <UnderlineButton onClick={handleToggle} open={open} />
      </div>
  )
}

export default LongTextWithButtonWrapper