import React from "react";

interface ButtonProps {
  onClick: (event: React.MouseEvent<HTMLButtonElement>) => void;
  open: boolean;
}

const UnderlineButton: React.FC<ButtonProps> = ({
  onClick,
  open,
}: ButtonProps) => {
  return (
    <div className="text-right text-grey-100 text-base md:text-lg lg:text-xl font-paragraph tracking-wide whitespace-pre-line">
      <button
        className="p-2 underline underline-offset-8 decoration-grey-100/80 hover:bg-grey-100/80 hover:text-prime-100 hover:no-underline active:bg-grey-100/80 transition-all cursor-pointer"
        onClick={onClick}
        aria-expanded={open}
      >
        {open ? "Show less" : "Read more"}
      </button>
    </div>
  );
};

export default UnderlineButton;
