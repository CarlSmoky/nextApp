"use client";
import React, { useState } from "react";
import { childrenProps } from "../types/Interfaces";
import UnderlineButton from "./UnderlineButton";

const TextWithlineClampButton: React.FC<childrenProps> = ({ children }: childrenProps) => {
  const [open, setOpen] = useState<boolean>(false);

  const handleToggle = () => {
    setOpen(!open);
  };
  return (
    <div>
      <p
        className={`${open ? "line-clamp-none" : "line-clamp-10"}`}
      >
        {children}
      </p>
      <UnderlineButton onClick={handleToggle} open={open} />
      </div>
  )
}

export default TextWithlineClampButton