"use client"
import React, { useState } from "react";
import UnderlineButton from "./UnderlineButton";

interface Props {
  paragraph: string;
}

const LongParagraphWrapper: React.FC<Props> = ({ paragraph }: Props)=> {
  const [open, setOpen] = useState<boolean>(false);

  const handleToggle = () => {
    setOpen(!open);
  };

  return (
    <div className="w-auto mt-10 md:mx-10 md:mt-0 md:w-2/3">
      <p className={`${open ? "line-clamp-none" : "line-clamp-12"} text-left text-grey-100 text-base md:text-lg lg:text-xl font-paragraph tracking-wide whitespace-pre-line`}>
        {paragraph}
      </p>
      <br />
      <UnderlineButton
        onClick={handleToggle}
        open={open}
      />
    </div>
  )
}

export default LongParagraphWrapper