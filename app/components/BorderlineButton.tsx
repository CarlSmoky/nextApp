import React, { PropsWithChildren } from "react";
import Link from "next/link";

interface Props extends PropsWithChildren {
  url: string;
  text: string;
}

const BorderlineButton: React.FC<Props> = ({ url, text, children }: Props) => {
  return (
    <div className="flex flex-col justify-evenly">
        <Link
          href={url}
          target="_blank"
          className="flex flex-row w-full p-2 xl:p-4 border-solid border-2 cursor-pointer text-grey-100 hover:text-prime-100  hover:bg-grey-100/80 focus:outline-none focus:shadow-outline active:ring active:ring-grey-100 active:bg-grey-100 transition-all my-3 xl:my-4 g-external_link"
        >
          {children}
          <p className="m-auto text-center text-base md:text-lg lg:text-xl font-paragraph tracking-wide">{text}</p>
        </Link>
    </div>
  );
};

export default BorderlineButton;
