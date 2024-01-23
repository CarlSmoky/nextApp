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
    <>
      <div
        className={`${
          open ? "line-clamp-none" : "line-clamp-7"
        } text-left text-grey-100 text-base md:text-lg lg:text-xl font-paragraph tracking-wide`}
      >
        {children}
      </div>
      <UnderlineButton onClick={handleToggle} open={open} />
      </>
  )
}

export default LongTextWithButtonWrapper